
const cursos = [
  {
    title: 'JavaScript Moderno Guía Definitiva Construye +10 Proyectos',
    technology: 'JavaScript ES6'
  },
  {
    title: 'React – La Guía Completa: Hooks Context Redux MERN +15 Apps',
    technology: 'React'
  },
  {
    title: 'Node.js – Bootcamp Desarrollo Web inc. MVC y REST API’s',
    technology: 'Node.js'
  },
  {
    title: 'ReactJS Avanzado – FullStack React GraphQL y Apollo',
    technology: 'React'
  }
]

// Resolvers
const resolvers = {
  Query: {
    getCourses: (_, { input }) => {
      const { technology } = input
      return cursos.filter((item) => item.technology === technology)
    },
    getTechs: () => cursos
  }
}

module.exports = resolvers