
import ManImage from '../assets/image/Men.jpg'
import WomanImage from '../assets/image/istockphoto-1217002161-1024x1024.jpg'
import KidImage from '../assets/image/kid.jpg'
export default function CategorySection() {




  return (
    <div>
      <div className='container grid grid-cols-1 md:grid-cols-3  max-md:space-y-3'>

          <div className='relative h-80 transform transition-transform mx-5 duration-300 hover:scale-105'>
            <div className='absolute bottom-1/2 left-12'>
              <h4 className='font-bold text-lg'>Men</h4>
              <h5>View All</h5>
            </div>
            <img src={ManImage} alt=""  className='w-full h-full object-cover rounded-lg shadow-md'/>
          </div>
          <div className='relative h-80 transform transition-transform mx-5 duration-300 hover:scale-105'>
            <div className='absolute bottom-1/2 left-12'>
              <h4 className='font-bold text-lg'>Women</h4>
              <h5>View All</h5>
            </div>
            <img src={WomanImage} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
          </div>
          <div className='relative h-80 transform transition-transform mx-5 duration-300 hover:scale-105'>
            <div className='absolute bottom-1/2 left-12'>
              <h4 className='font-bold text-lg'>Kid</h4>
              <h5>View All</h5>
            </div>
            <img src={KidImage} alt="" className='w-full h-full object-cover rounded-lg shadow-md' />
          </div>

      </div>
    </div>
  )
}
