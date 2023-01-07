import React from "react";
import Helmet from "react-helmet";
import { HomepageHeader } from "../../components/homepage/HomepageHeader";

export const Homepage: React.FC<any> = (): JSX.Element => {
  return (
    <div className="homepage">
      <Helmet>
        <meta property="og:type" content="website" />
        <title>
          The Echelon Scene Gay Matchmaking Agency - London, New York, Toronto,
          Berlin
        </title>
        <meta
          name="title"
          content="The Echelon Scene Gay Matchmaking Agency - London, New York, Toronto, Berlin"
        />
        <meta
          property="og:title"
          content="The Echelon Scene Gay Matchmaking Agency - London, New York, Toronto, Berlin"
        />
        <meta
          itemProp="name"
          content="The Echelon Scene Gay Matchmaking Agency - London, New York, Toronto, Berlin"
        />
        <meta
          name="twitter:title"
          content="The Echelon Scene Gay Matchmaking Agency - London, New York, Toronto, Berlin"
        />
        <meta
          property="og:site_name"
          content="The Echelon Scene - Gay Matchmaking Agency"
        />
        <meta
          name="description"
          content="The Echelon Scene is a dedicated offline gay matchmaking agency for incredible single men seeking a long-term, monogamous relationship with their equal partner in love."
        />
        <meta
          itemProp="description"
          content="The Echelon Scene is a dedicated offline gay matchmaking agency for incredible single men seeking a long-term, monogamous relationship with their equal partner in love."
        />
        <meta
          property="og:description"
          content="The Echelon Scene is a dedicated offline gay matchmaking agency for incredible single men seeking a long-term, monogamous relationship with their equal partner in love."
        />
        <meta
          itemProp="description"
          content="The Echelon Scene is a dedicated offline gay matchmaking agency for incredible single men seeking a long-term, monogamous relationship with their equal partner in love."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@TheEchelonScene" />
        <meta name="twitter:creator" content="@TheEchelonScene" />
        <meta property="og:url" content="https://theechelonscene.com/" />
        <meta
          name="keywords"
          content="Gay matchmaking, Gay Matchmaker, Gay Long Term Relationship, Exclusive Gay Dating, Long Term Gay Partner, Exclusive Gay Matchmaking, Find a Gay Husband"
        />
        <meta
          itemProp="image"
          content="https://images.prismic.io/theechelonscenev2/f0c105af-58ac-439b-bf8b-7c944f58c795_clientelle.jpg?auto=compress,format&amp;rect=0,625,2500,1250&amp;w=600&amp;h=300"
        />
        <meta
          name="twitter:image"
          content="https://images.prismic.io/theechelonscenev2/f0c105af-58ac-439b-bf8b-7c944f58c795_clientelle.jpg?auto=compress,format&amp;rect=0,625,2500,1250&amp;w=600&amp;h=300"
        />
        <meta
          property="og:image"
          content="https://images.prismic.io/theechelonscenev2/f0c105af-58ac-439b-bf8b-7c944f58c795_clientelle.jpg?auto=compress,format&amp;rect=0,594,2500,1313&amp;w=1200&amp;h=630"
        />
      </Helmet>
      <HomepageHeader />
    </div>
  );
};
