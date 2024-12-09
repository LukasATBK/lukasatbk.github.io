        // Función para alternar la fuente y guardar la elección en localStorage
        function toggleFont() {
            var body = document.body;
            if (body.classList.contains("comic-sans")) {
                body.classList.remove("comic-sans");
                localStorage.setItem("fontChoice", "SM64COOPDX");
            } else {
                body.classList.add("comic-sans");
                localStorage.setItem("fontChoice", "ComicSans");
            }
        }

        // Función para aplicar la fuente guardada al cargar la página
        function applySavedFontChoice() {
            var savedFont = localStorage.getItem("fontChoice");
            if (savedFont === "ComicSans") {
                document.body.classList.add("comic-sans");
            }
        }

        // Aplicar la fuente guardada al cargar la página
        document.addEventListener('DOMContentLoaded', applySavedFontChoice);

