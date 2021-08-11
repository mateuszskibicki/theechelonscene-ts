import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPressPageData } from '../../store/actions/press';
import { CommonPageLayout } from '../../components/common/page/CommonPageLayout';

const PressPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, press } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!press.content) {
      dispatch(fetchPressPageData());
    }
  }, [press.content, dispatch]);

  return (
    <>
      <CommonPageLayout
        loading={loading}
        content={press.content}
        title='Press'
      />
      <div className='container mt-5 mb-3'>
        <div className='row justify-content-center'>
          <div className='col-12 mb-5'>
            <h2 className='text-white text-center letter-spacing-05'>
              {press?.content?.title}
            </h2>
          </div>
        </div>
        <div className='row justify-content-center'>
          {press?.content?.press?.map(
            (singlePress: any): JSX.Element => (
              <div className='col-8 col-md-6 col-lg-4 col-xl-3 mb-5 text-center press-single-item'>
                <a
                  href={singlePress.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img
                    className='img-fluid shadow rounded mb-3'
                    src={singlePress.img.url}
                    alt={singlePress.img.alt}
                  />
                </a>
                <h5 className='text-white text-center letter-spacing-05 mb-3'>
                  {singlePress.title}
                </h5>
                <a
                  href={singlePress.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn btn-white-outline btn--small'
                >
                  Read article
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default PressPage;
