import JobsService from "../Services/JobsService.js";
import store from "../store.js"


//draws jobs, called in exported class
function _draw(){
  let jobs = store.State.jobs;
  let jobsElem = document.getElementById("jobs");
  let template = "";

  jobs.forEach(j=>{
    template+=j.Template;
  });
  jobsElem.innerHTML=template;
}

export default class JobsController{
  constructor(){
    store.subscribe("jobs",_draw);
    this.getAllJobs();
    console.log("job controller is live")
  }

  getAllJobs(){
    JobsService.getJobs();
  }

  addJob(event){
    event.preventDefault();

  let formData=event.target;

  let newJob={
    company: formData.company.value,
    jobTitle: formData.jobTitle.value,
    hours: formData.hours.value,
    rate: formData.rate.value,
    description: formData.rate.value,
    
  }
  JobsService.addJob(newJob);
  formData.reset();
  //@ts-ignore
  $("#job-form)").modal("toggle");
  }

  delete(id){
    JobsService.delJob(id);
  }

  inquire(id){
    
  }

}