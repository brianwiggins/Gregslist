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
                <h5 class="card-title">${this.jobTitle} - ${this.company} - ${
      this.rate
    }</h5>
                <p class="card-text">${this.description} <b>$${
      this.hours
    }</b></p>
                <button class="btn btn-info" onclick="app.jobsController.inquire('${
                  this._id
                }')">Inquire</button>
                <button class="btn btn-danger" onclick="app.jobsController.delete('${
                  this._id
                }')">DELETE</button>
              </div>
            </div>
              </div>
      `;
  }
}