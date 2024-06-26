<template>
  <div id="parent">
    <form @submit.prevent="formSubmit">
      <div>
        <input type="checkbox" value="Mario" v-model="names" />
        <label>Mario</label>
      </div>
      <div>
        <input type="checkbox" value="Dean" v-model="names" />
        <label>Dean</label>
      </div>
      <div>
        <input type="checkbox" value="Luigi" v-model="names" />
        <label>Luigi</label>
      </div>
      <!-- showing information in data function -->

      <div>
        <p>Email: {{ email }}</p>
        <p>Password: {{ password }}</p>
        <p>Role: {{ role }}</p>
        <p>Terms: {{ terms }}</p>
        <p>People: {{ names }}</p>
        <p>Current Language: {{ currentLanguage }}</p>
        <p>Languages: {{ languages }}</p>
      </div>

      <h1>Sign Up form hehe</h1>
      <!-- using v-model to save data in properties -->
      <label>Email: </label>
      <input type="email" required v-model="email" />
      <label>Password: </label>
      <input type="password" required v-model="password" />

      <label>Role: </label>
      <!-- Select box -->
      <select v-model="role">
        <!-- default option -->
        <option value="developer">Web developer</option>
        <option value="designer">Web designer</option>
        <option value="">Select a role</option>
      </select>

      <label>Languages: </label>
      <input
        type="text"
        v-model="currentLanguage"
        @keydown="keyfinder"
        @keyup.enter.alt="addLanguage()"
      />
      <button type="submit">Submit</button>

      <div v-for="(lang, index) in languages" :key="index + 1">
        <p id="para" @click="deleteLang(lang)">{{ index + 1 }}:{{ lang }}</p>
      </div>

      <div class="terms">
        <!-- you can use v-model on a checkbox and when clicked, it can register as a booleen value as true -->
        <input type="checkbox" required v-model="terms" />
        <label>Accept Terms and Conditions</label>
      </div>

      <h4>People wanted in your team:</h4>

      <div>
        <input type="checkbox" value="Shawn"/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "",
      //if you want default value to be checked then change booleen to true
      terms: false,
      names: [],
      currentLanguage: "",
      languages: ["something", "nothing"],
    };
  }
  ,methods:{
    formSubmit(){
        console.log("The page has been refreshed");
        this.email = ''
        this.password = ''
        this.terms = false
        this.currentLanguage = ''
        this.role = ''
    },
        keyfinder(event){
            console.log(event)
        },
        deleteLang(lang){
            this.languages = this.languages.filter0(item=> item !=lang )
        },
        addLanguage(){
        if(!this.languages.includes(this.currentLanguage)){
            this.languages.push(this.currentLanguage)
            
        }
    },
  }, computed:{
    
  }
  

};
</script>

<style scoped>
form{
    display:flex;
    flex-direction:column;
    align-items:center;
}
</style>
