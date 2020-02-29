import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import SelectOptions from '../coreComponent/SelectOptions'
import WindowDimmension from '../hook/WindowDimmension'
import moment from 'moment'

const styles = theme => ({
    dob: {
        paddingRight: 0,
        marginBottom: 15
    }
})

/**
 * Date of birth button functionality
 * @param {Object} props
 * Logicaly DobButton is when the month button clicked
 * range date will be generate based on year and month
 * Year button have logicaly same like month button
 */
function DobButton(props) {
    const { classes } = props
    const { width } = WindowDimmension()

    const xsDob = () => {
        if(width < 786) return 12
        return 6
    }

    const smDob = () => {
        if(width < 786) return 12
        return 4
    }

    const currentMonth = new Date().getMonth() + 1;
    const [day, setDay] = useState({value: '01', label: '1'});
    const [month, setMonth] = useState({value: currentMonth, label: 'JAN'});
    const [year, setYear] = useState({value: '2020', label: '2020'});
    const [rangeDay, setRangeDay] = useState([1]);
    const [labelDay, setLabelDay] = useState('Date');
    const [labelMonth, setLabelMonth] = useState('Month');
    const [labelYear, setLabelYear] = useState('Year');

    function handleClickMonth(obj) {
        setMonth(obj)
        props.onChangeMonth(obj.value)
        const x = getDay(year.value, obj.value)
        setRangeDay(x)
        setLabelMonth(obj.label);
    }

    function handleClickYear(obj) {
        setYear(obj)
        props.onChangeYear(obj.value)
        const x = getDay(obj.value, month.value)
        setRangeDay(x)
        setLabelYear(obj.label)
    }

    function handleClickDay(obj) {
        setDay(obj)
        props.onChangeDay(obj.value)
        setLabelDay(obj.label)
    }

    const getDay = (y, m) => {
        const date = new Date(y, m, 0).getDate();
        let day = []
        for (let i = 1; i <=date; i++) {
            const a = i < 10 ? i : i;
            day.push({value: a, label: i})
        }
        return day;
    }
    
    const getMonth = () => {
        const m = moment.monthsShort();
        let month = [];
        for (let i = 1; i <=m.length; i++) {
            const a = i < 10 ? i : i;
            month.push({value: a, label: m[i - 1]})
        }
        return month;
    }
    
    const getYear = () => {
        const date = new Date()
        let year = []
        let minYear = date.getFullYear()
        for (let i = 0; i <= minYear; i++) {
            if(i > 1945) {
                year.unshift({value: i, label: i})
            }
        }
        return year;
    }

    return(
        <Grid container item xs={12}>
            <Grid item xs={xsDob()} sm={smDob()} style={{ paddingRight: width > 786 ? 10 : 0}} className={classes.dob}>
                <SelectOptions
                    labelButton={labelMonth}
                    data={getMonth()}
                    onSelect={(value) => handleClickMonth(value)} />
            </Grid>
            <Grid item xs={xsDob()} sm={smDob()} style={{ paddingRight: width > 786 ? 10 : 0}} className={classes.dob}>
                <SelectOptions
                    labelButton={labelDay}
                    data={rangeDay}
                    onSelect={(value) => handleClickDay(value)} />
            </Grid>
            <Grid item xs={xsDob()} sm={smDob()} className={classes.dob}>
                <SelectOptions
                    labelButton={labelYear}
                    data={getYear()}
                    onSelect={(value) => handleClickYear(value)} />
            </Grid>
        </Grid>
    )
}

SelectOptions.propTypes = {
    data: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
}
export default withStyles(styles)(DobButton)