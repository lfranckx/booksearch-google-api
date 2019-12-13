import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {
    render() {
        const {handlePrintType, handleBookType} = this.props
        return (
            <div className="filter-section">
                <label className="print-type-label filter-label">Print Type:</label>
                <form 
                    className="printType-filter-form"
                    onChange={e => handlePrintType(e.target.value)}
                >
                    <select name="print-type-filter" className="filter">
                        <option>All</option>
                        <option>Only Books</option>
                    </select>
                </form>

                <label className="book-type-label filter-label">Book Type:</label>
                <form 
                    className="book-type-filter-form"
                    onChange={e => handleBookType(e.target.value)}
                >
                    <select name="book-type-filter" className="filter">
                        <option value="ebooks">All ebooks</option>
                        <option value="free-ebooks">Free ebooks</option>
                        <option value="paid-ebooks">Paid ebooks</option>
                        <option value="full">Fully Avaialable ebooks</option>
                        <option value="partial">Partially Available ebooks</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default Filter