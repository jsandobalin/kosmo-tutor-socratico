export const siteConfig = {
  name: "Tutor Socratico",
  description: "Es una aplicación web que me permite aprender asignaturas de universidad mediante el método socrático con IA. Primero se hace una evaluación sobre los conocimientos iniciales del estudiante sobre un tema particular. A partir de la evaluación inicial de conocimiento se realizar el contenido a revisar para obtener nuevos conocimientos. Se debe seguir el diseño instruccional.  El aprendizaje es mediante reflexión con el método socratico. Finalmente, se debe evaluar el conocimiento adquirido. ",
  archetype: "saas_tool" as
    | "storefront"
    | "dashboard"
    | "workflow"
    | "saas_tool"
    | "content",
  primaryColor: "#0f766e",
} as const;
