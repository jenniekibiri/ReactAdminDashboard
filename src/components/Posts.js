import React, { Component } from 'react'

export class Posts extends Component {
    render() {
        return (
            <div className ="m-3" >
            <div  className="row">
<div className="col md-4 m-2">
    <button type="button" className="btn mr-2 btn-primary">Previous</button>
<button type="button" className="btn  btn-secondary">Next</button>
</div>
   <div className="col md-4 offset-md-2">

        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div className="input-group">
              <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
              <div className="input-group-append">
                <button className="btn btn-success" type="button">
                  <i className="fas fa-search fa-sm"></i>
                </button>
              </div>
            </div>
          </form>

   </div>
  
            </div>

         
           
                    <table className="table  ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Post</th>
      <th scope="col">Posted By</th>
      <th scope="col">Date created</th>
      <th scope="col">Status</th>
       <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
       <td>pending</td>
       <td>  <button className="btn  " type="button" >
                  <i type="btn" className="fas btn fa-trash fa-sm text-danger"></i>
                </button>   </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
       <td>Approved</td>
        <td>  <button className="btn  " type="button" >
                  <i type="btn" className="fas btn fa-trash fa-sm text-danger"></i>
                </button>   </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
       <td>@mdo</td>
        <td>pending</td>
         <td>  <button className="btn  " type="button" >
                  <i type="btn" className="fas btn fa-trash fa-sm text-danger"></i>
                </button>   </td>
    </tr>
    
  </tbody>
</table>


                


                   <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Socioh 2020</span>
            </div>
          </div>
        </footer>
            </div>
        )
    }
}

export default Posts
