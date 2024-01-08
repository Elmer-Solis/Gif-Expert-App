
export const GifItem = ({ id, title, img }) => {
    console.log(id);
    return (
        <div className="card">
            <img src={img} alt={id} />
            <p>{title}</p>
        </div>
    )
}
