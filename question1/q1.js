


// formatDuration(62)    // returns "1 minute and 2 seconds"
// formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"


class FormatDate {
    static secondsInOneHour = 60 * 60;
    static secondsInOneMinute = 60
    static secondsInOneYear = 60 * 60 * 24 * 365;
    static secondsInOneDay = 60 * 60 * 24;
    static seconds = 0
    static date = null
    static years = {};
    static days = {};
    static hours = {};
    static minutes = {};
    static seconds = {};
    /**
     * assigns the number of years,plural, and delimiter to the years poperty
     */
    static makeYears() {
        this.years.value = Math.floor(this.date / this.secondsInOneYear)
        this.years.plural = this.setPlural('year', this.years.value)
        this.years.delimiter = this.makeDelimiter(this.secondsInOneDay, this.secondsInOneHour)
        this.date = this.date % this.secondsInOneYear
        return this
    }
    static makeDays() {
        this.days.value = Math.floor(this.date / this.secondsInOneDay)
        this.days.plural = this.setPlural('day', this.days.value)
        this.days.delimiter = this.makeDelimiter(this.secondsInOneHour, this.secondsInOneMinute)
        this.date = this.date % this.secondsInOneDay
        return this
    }
    static makeHours() {
        this.hours.value = Math.floor(this.date / this.secondsInOneHour)
        this.hours.delimiter = this.makeDelimiter(this.secondsInOneMinute, this.secondsInOneMinute)
        this.hours.plural = this.setPlural('hour', this.hours.value)
        this.date = this.date % this.secondsInOneHour
        return this
    }
    static makeMinutes() {
        this.minutes.value = Math.floor(this.date / this.secondsInOneMinute)
        this.minutes.plural = this.setPlural('minute', this.minutes.value)
        this.minutes.delimiter = this.makeDelimiter(this.secondsInOneMinute)
        this.date = this.date % this.secondsInOneMinute
        return this
    }
    static makeSeconds() {
        this.seconds.value = this.date
        this.seconds.delimiter = ''
        this.seconds.plural = this.setPlural('second', this.seconds.value)
        return this
    }
    static setPlural(name, value) {
        if (value == 1) return ' ' + name
        if (value == 0) return '';
        return " " + name + 's'
    }
    /***
     * Checks the remainders of the next levels
     * @params {Level} nexLevel, {Level} subsequent level
     */
    static makeDelimiter(nextLevel, followingLevel) {
        if (this.date % nextLevel === 0) return ""
        if ((this.date % nextLevel) % followingLevel == 0) return " and"
        return ", and "
    }

    static format(date) {
        this.date = date
        this.makeYears().makeDays().makeHours().makeMinutes().makeSeconds()
        let output = ''
        if (this.years.value > 0)
            output
                += this.years.value
                += this.years.plural
                += this.years.delimiter
        if (this.days.value > 0)
            output
                += this.days.value
                += this.days.plural
                += this.days.delimiter
        if (this.hours.value > 0)
            output
                += this.hours.value
                += this.hours.plural
                += this.hours.delimiter
        if (this.minutes.value > 0)
            output
                += this.minutes.value
                += this.minutes.plural
                += this.minutes.delimiter
        if (this.seconds.value > 0)
            output
                += this.seconds.value
                += this.seconds.plural
                += this.seconds.delimiter
        return output
    }


}


const fomatedString = FormatDate.format(453405)
console.log(fomatedString)


