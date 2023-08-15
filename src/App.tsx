
import { Post, PostType}  from './componentes/Post'
import { Header } from './componentes/Header'
import { Sidebar } from './componentes/Sidebar'
import './global.css'
import styles from './App.module.css'



const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/mqthiago.png',
      name: 'Thiago Martins',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'github.com/mqthiago/01-fundamentos-reactjs'},
    ],
    publishedAt: new Date('2023-08-10 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/alexandrekoenich.png',
      name: 'Alexandre Koenich',
      role: 'Back End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: ''},
    ],
    publishedAt: new Date('2023-07-10 15:32:22'),
  },
]

export function App() {

  return (
   <div>
    <Header />
    
    <div className={styles.wrapper}>
      <Sidebar />
      <main>  
        {posts.map(post => {
          return (
            <Post
            key={post.id}
            post={post}
            />
          )
        })}
  </main>
    </div>
   </div>
    
  )
    
}

