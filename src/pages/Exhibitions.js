import ExhibitionCard from '../components/ExhibitionCard';
import img1 from '../images/image1.jpg';
import img2 from '../images/images2.jpg';
import img3 from '../images/image3.jpg';
import img4 from '../images/image4.jpg';

const Exhibitions = () => {
    return (
        <div className='Exhibitions-List'>
            <ExhibitionCard src={img1} alt='exhibition1'/>
            <ExhibitionCard src={img2} alt='exhibition2'/>
            <ExhibitionCard src={img3} alt='exhibition3'/>
            <ExhibitionCard src={img4} alt='exhibition4'/>
            <ExhibitionCard src={img1} alt='exhibition1'/>
            <ExhibitionCard src={img2} alt='exhibition2'/>
            <ExhibitionCard src={img3} alt='exhibition3'/>
            <ExhibitionCard src={img4} alt='exhibition4'/>
        </div>
    );
}

export default Exhibitions;