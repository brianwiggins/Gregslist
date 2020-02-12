import store from "../store.js";
import Job from "../Models/Job.js";

//@ts-ignore
let _api = axios.create({
  baseURL:"https://bcw-gregslist.herokuapp.com/api/jobs",
  timeout:5000
});

class JobsService {
  getJobs(){
    _api
      .get("")
      .then(res=>{let apiJobs=res.data.data.map(j=>new Job(j));
      store.commit("jobs",apiJobs);
      console.log("stored jobs", store.State.jobs);
    }).catch(error=>{console.error(error);})


  }

  getJobById(id){
    _api.get(id);
  }

  addJob(newJob){
    _api
      .post("", newJob)
      .then(res=>{
        let newApiJob = new Job(res.data.data);
        let jobs =[...store.State.jobs,newApiJob];
        store.commit("jobs",jobs);
      }).catch(error=>{console.error(error);})
  }

  editJob(id,update){
    _api
    .put(id,update)
    .then(res=>{
      let job = store.State.jobs.find(j=>j._id==id);
      job = {...job,...update};
      store.commit("jobs",store.State.jobs);
    }).catch(error=>{console.error(error);})
  }

  delJob(id){
    _api.delete(id)
    .then(()=>{let filteredJobs=store.State.jobs.filter(j=>j._id!=id);
      store.commit("jobs",filteredJobs)
    }).catch(error=>{console.error(error);})
  }
}

const service = new JobsService();
export default service;