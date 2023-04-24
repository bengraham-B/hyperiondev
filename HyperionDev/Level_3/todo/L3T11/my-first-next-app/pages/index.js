//Import the Link API to support client-side navigation
import Link from 'next/link'
import Layout from '../components/MyLayout'
//import Image from 'react-bootstrap/Image'

/* Notice in the example below how we render static images with Next.js:
Create a folder called static in your project root directory. From your code you can then reference those files with /static/ URLs (see<img src={`/static/art/${props.data.image}.jpg`} alt=""/>) 
Note: Don't name the static directory anything else. The name is required and is the only directory that Next.js uses for serving static assets.*/
export default () => (
	<Layout>
	    <h1>Hello, I can use Next!!!</h1>
	    <img src="/static/images/ITPic.jpg/"/>
  	</Layout>
)