import React, { useState } from 'react';
import axios from 'axios';

export interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
}

interface FormErrors {
  email?: string;
  general?: string;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const payload = {
        email: formData.email,
        ...(formData.firstName && { firstName: formData.firstName }),
        ...(formData.lastName && { lastName: formData.lastName })
      };

      await axios.post('https://orange-cat-digital-emails.netlify.app/api/theechelonscene', payload);

      setIsSuccess(true);
      setFormData({ email: '', firstName: '', lastName: '' });
    } catch (error) {
      setErrors({
        general: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setFormData({ email: '', firstName: '', lastName: '' });
    setErrors({});
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="newsletter-modal-overlay" onClick={handleClose}>
      <div className="newsletter-modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="newsletter-modal__close"
          onClick={handleClose}
          aria-label="Close modal"
        >
          <i className="fas fa-times"></i>
        </button>

        <div className="newsletter-modal__content">
          {isSuccess ? (
            <div className="newsletter-modal__success">
              <div className="newsletter-modal__success-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h2 className="newsletter-modal__title">Welcome to the Inner Circle!</h2>
              <p className="newsletter-modal__subtitle">
                Thank you for joining. You'll receive exclusive updates and insider content.
              </p>
              <button
                className="btn btn--small btn-white-outline"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <div className="newsletter-modal__header">
                <h2 className="newsletter-modal__title">Join the Inner Circle</h2>
                <p className="newsletter-modal__subtitle">
                  Get exclusive access to insider content, industry insights, and member-only updates.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="newsletter-modal__form">
                {errors.general && (
                  <div className="newsletter-modal__error newsletter-modal__error--general">
                    {errors.general}
                  </div>
                )}

                <div className="newsletter-modal__field">
                  <label htmlFor="email" className="newsletter-modal__label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`newsletter-modal__input ${errors.email ? 'newsletter-modal__input--error' : ''}`}
                    placeholder="Enter your email address"
                    required
                  />
                  {errors.email && (
                    <div className="newsletter-modal__error">
                      {errors.email}
                    </div>
                  )}
                </div>

                <div className="newsletter-modal__field">
                  <label htmlFor="firstName" className="newsletter-modal__label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="newsletter-modal__input"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="newsletter-modal__field">
                  <label htmlFor="lastName" className="newsletter-modal__label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="newsletter-modal__input"
                    placeholder="Enter your last name"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--small btn-white-outline newsletter-modal__submit"
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join the Inner Circle'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
