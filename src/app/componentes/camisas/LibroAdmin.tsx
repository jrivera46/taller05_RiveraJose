export const LibroAdmin = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border border-success">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "50%" }}>Título</th>
                <th style={{ width: "15%" }}>Autor</th>
                <th style={{ width: "15%" }}>Editorial</th>
                <th style={{ width: "10%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>El Principito</td>
                <td>Antoine de Saint-Exupéry</td>
                <td>Salamandra</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#FF0000" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{ color: "#FF0000" }}></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Harry Potter y la piedra filosofal</td>
                <td>J.K. Rowling</td>
                <td>Salamandra</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#FF0000" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{ color: "#FF0000" }}></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cien años de soledad</td>
                <td>Gabriel García Márquez</td>
                <td>Diana</td>
                <td>
                  <i className="fa-solid fa-pen-to-square" style={{ color: "#FF0000" }}></i>
                  &nbsp;
                  <i className="fa-solid fa-trash" style={{ color: "#FF0000" }}></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )}