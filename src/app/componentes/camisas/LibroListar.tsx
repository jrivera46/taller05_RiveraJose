export const LibroListar = () => {
  return (
    <>
      <div className="pt-3 d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered border border-success">
            <thead>
              <tr>
                <th style={{width:"10%"}}>Código</th>
                <th style={{width:"50%"}}>Título</th>
                <th style={{width:"20%"}}>Autor</th>
                <th style={{width:"20%"}} className="text-center">Editorial</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>El Principito</td>
                <td>Antoine de Saint-Exupéry</td>
                <td className="text-center">Reynal & Hitchcock (EUA) Éditions Gallimard </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Harry Potter y la piedra filosofal</td>
                <td>J.K. Rowling</td>
                <td className="text-center">Bloomsbury Salamandra Scholastic</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cien años de soledad</td>
                <td>Gabriel García Márquez</td>
                <td className="text-center">Editorial Sudamericana</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Guerra y paz</td>
                <td>Leon Tolstoi</td>
                <td className="text-center">Editorial Alba</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
