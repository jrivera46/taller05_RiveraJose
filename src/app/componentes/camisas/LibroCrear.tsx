export const LibroCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-8">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="titulo" className="form-label">
                Título
              </label>
              <input
                type="text"
                className="form-control border border-success"
                id="titulo"
                name="titulo"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="autor" className="form-label">
                Autor
              </label>
              <input
                type="text"
                className="form-control border border-success"
                id="autor"
                name="autor"
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="editorial" className="form-label">
                Editorial
              </label>
              <input
                type="text"
                className="form-control border border-success"
                id="editorial"
                name="editorial"
                required
              />
            </div>

            <div className="col-12">
              <button className="btn btn-success" type="submit">
                Registrar Libro
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};