import { Link } from 'react-router-dom'
import '' from 
import './footer.css'

export default function footer(){
    return(
        <div>
            
<section className="feed" id="feed">
          <h1 className="heading"><span>Feedback</span></h1>
 
          <div className="row">
            <div className="image">
            <img src={feed} alt="feedback" />
            </div>
            <form action="">
              <h3>Deixa seu Feedback</h3>
              <textarea placeholder="Sua Mensagem" className="box" cols="30" rows="10"></textarea>
              <input type="submit" value="Enviar" className="btn" />
            </form>
          </div>
        </section>
        </div>
    )
}