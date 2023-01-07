import Prismic from "prismic-javascript";

export const prismicConnection = async () => {
  return await Prismic.getApi(process.env.REACT_APP_URL_PRISMIC!, {
    accessToken: process.env.REACT_APP_SECRET_PRISMIC
  });
};
