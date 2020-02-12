export default class Job{
  constructor(data){
    this._id=data._id;
    this.company=data.company;
    this.jobTitle=data.jobTitle;
    this.hours=data.hours;
    this.rate=data.rate;
    this.description=data.description;
  }

  get Template(){
    return `
    <div class="col-3">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${this.jobTitle} -${this.company} - ${this.rate}</h5>
          <p class="card-text">${this.description} <b>$${this.hours}</b></p>
          <button class="btn btn-info" data-toggle="modal" data-target="#inquire-form">Inquire</button>
          <div
          class="modal fade" id="inquire-form" tabindex="-1" role="dialog" aria-labelledby="modelTitleId"
          aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Enter your Contact Information and Submit the form to Inquire</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form onsubmit="app.jobsController.inquire(event)">
                <div class="form-group">
                  <label for="name">Full Name</label>
                  <input type="text" name="name" class="form-control" placeholder="Jane/John Doe" required/>
                </div>
                <div class="form-group">
                  <label for="email">Email Address</label>
                  <input type="text" name="email" class="form-control" placeholder="example@email.com" required/>
                </div>
                <div class="form-group">
                  <label for="resume">Your Resume File</label>
                  <input type="file" name="resume" class="form-control-file" required/>
                </div>
                <button type="submit" class="btn btn-primary">Send</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Dismiss</button>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-danger" onclick="app.jobsController.delete('${
                  this._id
                }')">DELETE</button>
              </div>
            </div>
              </div>
      `;
  }

}