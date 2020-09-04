// pages/Home.tsx
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";

export const Home: React.FC = () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Home</h1>
      </div>

      <p>
        Il était une fois, une collection de cinq livres racontent les histoires
        d'un formidable héro nommé Henri Potier.
      </p>

      <p>
        Tous les enfants du monde trouvaient les histoires de cet adolescent
        fantastiques.
      </p>

      <p>
        L'éditeur de cette collection, dans un immense élan de générosité (mais
        aussi pour booster ses ventes), décida de mettre en place des offres
        commerciales aussi aléatoires que l'issue des sorts de Ron Weasley.
      </p>
    </>
  );
};
