import { useEffect, useState } from 'react'

function Github() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/user/gauravghuge7`)

    .then(res => res.json())

    .then(data => {
      console.log(data)
      setData(data)
    })
  }, [])

  return (
    <div className='text-center text-white bg-gray-400 p-4'>
      
      Github followers use in the : {data.followers}

      <img src={data.avatar_url} alt="" height='200px' width={'200px'} />
    </div>
  )
}

export default Github
