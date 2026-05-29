import { setLink } from "@codegouvfr/react-dsfr/link";
import { Link, type LinkProps } from "@tanstack/react-router";

declare module "@codegouvfr/react-dsfr/link" {
  interface RegisterLink {
    Link: (props: LinkProps) => React.JSX.Element;
  }
}

setLink({ Link });

export {}; // ← force Vite à ne pas tree-shaker ce fichier
