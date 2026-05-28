import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/administration")({
  component: Administration,
});

function Administration() {
  return (
    <div className="fr-container">
      <Outlet />
    </div>
  );
}
