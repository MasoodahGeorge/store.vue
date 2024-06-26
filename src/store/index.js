import { createStore } from "vuex";

export default createStore({
  //main guys we are going to use: state, mutations, and actions

  state: {
    //where we store our data (similar to js variables  --> data= property name; null= property value)
    Education: null, //using null=nothing, therefore you can assign anything to it.
    Projects: null,
    Skills: null,
    Work: null,
    Testimonials: null,
    AboutMe: null,
  },

  //COMMITTING A MUTATION
  mutations: {
    //used to change/set/update the state. Its the only thing that can change a state.
    //write a function that takes 2 properties (state + payload = information passed into a function)
    //call a commit use stateName + '.commit'
    setAboutMe(state, payload) {
      state.AboutMe = payload;
    },
    setEducation(state, payload) {
      state.Education = payload;
    },
    setProjects(state, payload) {
      state.Projects = payload;
    },
    setSkills(state, payload) {
      state.Skills = payload;
    },
    setWork(state, payload) {
      state.Work = payload;
    },
    setTestimonials(state, payload) {
      state.Testimonials = payload;
    },
  },

  //DISPATCH AN ACTION
  actions: {
    //run all asynchronous code (if you want to fetch/send data: fetch/send data, then go through  )
    //also uses a function with 2 params (state + )
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://caitlin-dalwai.github.io/first-api/data/')
      let data = await fetchedInfo.json()
    // dependent on json file
    let {About,Projects,Education,Skills,Work,Testimonials} = data
    console.log(data);
    commit('setAboutMe',About)
    commit('setEducation',Education)
    commit('setWork',Work)
    commit('setProjects',Projects)
    commit('setTestimonials',Testimonials)
    commit('setSkills',Skills)
    },
  },

  modules: {
    // Used to seperate code to make it more readable.
  },

  getters: {
    // Used to get things.
    //Also uses a function
  },
});
