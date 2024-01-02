type Params = {
    params: {
        photoId : string
    }
}

export default function Photo({params} : Params) {
  return (
    <div>Photo ID of : {params.photoId}</div>
  )
}
