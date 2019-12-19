import React from 'react'
import { connect } from 'react-redux'
import { loadingStart, loadingStop } from '../../store/reducers/loading/loadingSlice'

interface IProps {
    loading: { loading: boolean };
    loadingStart: any
    loadingStop: any
}

const ContactPage: React.FC<any> = ({ loading, loadingStart, loadingStop }: IProps): JSX.Element => {
    console.log(loading, loadingStart, loadingStop)
    return (
        <div>
            <h1>Contact</h1>
            <button onClick={() => loadingStart()}>aa</button>
            <button onClick={() => loadingStop()}>aa</button>
        </div>
    )
}

const mapStateToProps = ({ loading }: { loading: boolean }) => loading;

const mapDispatchToProps = { loadingStart, loadingStop };

export const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactPage)
