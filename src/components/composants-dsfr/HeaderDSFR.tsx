import { Header, type HeaderProps } from "@codegouvfr/react-dsfr/Header";

type NavItems = NonNullable<HeaderProps["navigation"]>;

const liens: NavItems = [
  {
    linkProps: { to: "/accueil" },
    text: "Accueil",
  },
  {
    linkProps: { to: "/administration" },
    text: "Administration",
  },
  {
    linkProps: { href: "#", target: "_self" },
    text: "accès direct",
  },
];

export const HeaderDsfr = () => (
  <Header
    brandTop={"Ministère de la justice"}
    homeLinkProps={{ href: "/", title: "Accueil" }}
    serviceTitle="Application de trucs et machins"
    navigation={liens}
  />
);
