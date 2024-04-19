import autor1 from "../../../assets/img/jk.jpeg";
import autor2 from "../../../assets/img/saint_exupery.jpg";
import autor3 from "../../../assets/img/garcia_marquez_gabriel.jpg";
import autor4 from "../../../assets/img/tolstoi.jpeg";

export const Acerca = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={autor1}
                  className="card-img-top"
                  alt="El Líder"
                  style={{ maxWidth: "100%", height: "500px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Jk Rowling</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Joanne Rowling, conocida como J.K. Rowling, nació el 31 de
                    julio de 1965 en Yate, Gloucestershire, Inglaterra. Es una
                    autora británica famosa por crear la serie de libros de
                    Harry Potter, que se convirtió en un fenómeno mundial. Antes
                    de alcanzar la fama con Harry Potter, Rowling luchó contra
                    la pobreza y la depresión como madre soltera
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={autor2}
                  className="card-img-top"
                  alt="El Líder"
                  style={{ maxWidth: "100%", height: "500px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">
                    Antoine de Saint-Exupéry
                  </h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Antoine Marie Jean-Baptiste Roger de Saint-Exupéry, nacido
                    el 29 de junio de 1900 en Lyon, Francia, fue un escritor y
                    aviador francés. Es conocido principalmente por su obra "El
                    principito", un cuento filosófico y poético que ha sido
                    traducido a numerosos idiomas y sigue siendo una de las
                    obras más queridas en todo el mundo
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={autor3}
                  className="card-img-top"
                  alt="El Líder"
                  style={{ maxWidth: "100%", height: "500px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">
                    Gabriel García Márquez
                  </h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Gabriel José de la Concordia García Márquez, nacido el 6 de
                    marzo de 1927 en Aracataca, Colombia, fue un escritor
                    colombiano y una figura destacada del realismo mágico. Su
                    obra más famosa es "Cien años de soledad", una novela que ha
                    sido aclamada como una de las mejores obras de la literatura
                    del siglo XX. García Márquez fue galardonado con el Premio
                    Nobel de Literatura en 1982 por sus novelas y relatos
                    cortos, en los que la fantasía y lo real se entrelazan de
                    manera magistral. Además de su trabajo literario, García
                    Márquez también fue periodista y activista político.
                    Falleció el 17 de abril de 2014 en Ciudad de México, México.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src={autor4}
                  className="card-img-top"
                  alt="El Líder"
                  style={{ maxWidth: "100%", height: "500px" }}
                />
                <div className="card-body">
                  <h4 className="card-title fw-bolder">Leon Tolstoi</h4>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    León Tolstói, nacido el 9 de septiembre de 1828 en Yásnaya
                    Poliana, Rusia, fue uno de los más grandes escritores de la
                    literatura rusa. Es conocido principalmente por sus obras
                    maestras "Guerra y Paz" y "Anna Karenina". Tolstói exploró
                    temas universales como el amor, la guerra, la moralidad y la
                    búsqueda espiritual en sus escritos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
