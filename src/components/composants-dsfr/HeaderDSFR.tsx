import { Header } from "@codegouvfr/react-dsfr/Header";

const liens = [
  {
    linkProps: {
      to: "/accueil",
    },
    text: "Accueil",
  },
  {
    linkProps: {
      to: "/administration",
    },
    text: "Administration",
  },
  {
    linkProps: {
      href: "#",
      target: "_self",
    },
    text: "accès direct",
  },
  {
    linkProps: {
      href: "#",
      target: "_self",
    },
    text: "accès direct",
  },
];

export const HeaderDsfr = () => {
  return (
    <Header
      brandTop={"Ministere de la jsutice"}
      homeLinkProps={{
        href: "/",
        title:
          "Accueil - Nom de l’entité (ministère, secrétariat d‘état, gouvernement)",
      }}
      serviceTitle="Application de trucs et machins"
      navigation={liens}
    />
  );
};
