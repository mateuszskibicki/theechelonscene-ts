import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLocationsMainData } from "../../store/actions";
import { CommonPageLayout } from "../../components/common/page/CommonPageLayout";
import { Link } from "react-router-dom";

interface ILocationsArray {
  title: string;
  url: string;
}

const locationsArray: ILocationsArray[] = [
  { title: "London", url: "london" },
  { title: "New York", url: "new-york" },
  { title: "Toronto", url: "toronto" },
  { title: "Berlin", url: "berlin" },
  { title: "Zurich", url: "zurich" },
  { title: "Los Angeles", url: "los-angeles" },
  { title: "San Francisco", url: "san-francisco" }
];

const LocationsPage: React.FC<any> = (): JSX.Element | null => {
  // get state
  const { loading, locationsMain } = useSelector((state: any) => state);
  const dispatch = useDispatch();

  // fetch data
  useEffect(() => {
    if (!locationsMain.content) {
      dispatch(fetchLocationsMainData());
    }
  }, [locationsMain.content, dispatch]);

  return (
    <>
      <CommonPageLayout
        loading={loading}
        content={locationsMain.content}
        title="Locations"
      />
      <div className="container mt-5 mb-3">
        <div className="row justify-content-center">
          <div className="col-12 mb-5">
            <h2 className="text-white text-center letter-spacing-05">
              We provide our services all around the world
            </h2>
          </div>
          {locationsArray.map(
            (location: ILocationsArray): JSX.Element => (
              <div
                className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mb-5"
                key={location.title}
              >
                <h2 className="text-white letter-spacing-1 mb-3">
                  {location.title}
                </h2>
                <Link
                  to={`/location/${location.url}`}
                  className="btn btn-white-outline btn--small text-white shadow"
                >
                  Read more
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default LocationsPage;
