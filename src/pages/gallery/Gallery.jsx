import './gallery.css'
import firstImage from '../../assets/images/gallery/galleryimg1.png'
import secondImage from '../../assets/images/gallery/galleryimg2.png'
import thirdImage from '../../assets/images/gallery/galleryimg3.png'
import forthImage from '../../assets/images/gallery/galleryimg4.png'
import fifthImage from '../../assets/images/gallery/galleryimg5.png'
import sixthImage from '../../assets/images/gallery/galleryimg6.png'
import seventhImage from '../../assets/images/gallery/galleryimg7.png'
import eighthImage from '../../assets/images/gallery/galleryimg8.png'
import ninthImage from '../../assets/images/gallery/galleryimg9.png'
import tenthImage from '../../assets/images/gallery/galleryimg10.png'

function Gallery() {
  return (
    <div className="main-gallery">
      <div className="text-heading">
        <p>Photo</p>
        <h2>Gallery</h2>
      </div>
      <div className='image-boxes'>
        {/* First Row Images */}
        <div className='first-row-images'>
          <img src={firstImage} alt="" />
          <img src={secondImage} alt="" />
          <img src={thirdImage} alt="" />
          <img src={forthImage} alt="" />
          <img src={fifthImage} alt="" />
        </div>

        {/* Second Row Image */}
        <div className='second-row-images'>
          <img src={sixthImage} alt="" />
          <img src={seventhImage} alt="" />
          <img src={eighthImage} alt="" />
          <img src={ninthImage} alt="" />
          <img src={tenthImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
