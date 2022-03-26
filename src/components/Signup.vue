<template>
  <form @submit.prevent="handleSubmit">
    <h1 class="oraculum">Oraculum</h1>

    <label>Nome:</label>
    <input type="text" required v-model="nome" />

    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Password:</label>
    <input type="password" required v-model="password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Telefone:</label>
    <input required v-model="telefone" />

    <div class="temrs">
      <input type="checkbox" v-model="terms" required />
      <label>Aceitar termos de uso e condições</label>
    </div>

    <div class="submit">
      <button>Cadastrar</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      telefone: "",
      nome: "",
      terms: false,
      tempSkill: "",
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.tempSkill) {
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    handleSubmit() {
      console.log("ok");
      this.passwordError =
        this.password.length > 5
          ? "Sucesso!"
          : "É necessario ter mais de 6 digitos!";

      if (this.passwordError) {
        console.log("email: ", this.email);
        console.log("password: ", this.password);
        console.log("role: ", this.role);
        console.log("skills: ", this.skills);
        console.log("tems accepted: ", this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  max-height: 483px;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  letter-spacing: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  background: #534292;
  border: 0;
  width: 210px;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}

.oraculum {
  display: flex;
  justify-content: center;
  margin: 4px;
  margin-top: -8px;
  color: #534292;
  font-style: italic;
  font-family: fangsong;
}
</style>
