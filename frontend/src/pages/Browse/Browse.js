import { useEffect } from "react"
import { getImages } from "../../store/images";

const { useDispatch, useSelector } = require("react-redux")

const Browse = () => {
  const dispatch = useDispatch();
  const images = useSelector((state) => Object.values(state.image))
  const users = useSelector((state) => Object.values(state.session))

  useEffect(() => {
    dispatch(getImages());
  }, [dispatch])

  const handleButtonClick = () => {
    console.log('images', images)
    console.log('users', users);
  }

  return (
    <>
      <h1>In Browse</h1>
      <button onClick={handleButtonClick}>console</button>
    </>

  )
}

export default Browse;
