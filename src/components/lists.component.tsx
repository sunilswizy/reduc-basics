import React from "react";
import './lists.styles.css'
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
// import RootState to annotate selecors

const Lists: React.FC = () => {
    const { data, loading } = useSelector((state: RootState) => state.repo);
    
    return (
        <div className="list-items">
            {
                loading ? 
                    <>loading....</>
                :(
                    data.slice(0, 5).map((item, id) => {
                        return <li key={ id }>{ item }</li>
                    })
                )
            }
        </div>
    )
}

// const mapStateToProps = (state: any) => ({
//     data: state.repo.data,
//     loading: state.repo.loading
// })

// export default connect(mapStateToProps)(Lists)

export default Lists;