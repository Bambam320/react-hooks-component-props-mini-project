import React from "react";

function Article({title, date="January 1, 1970", preview, minutes}) {

    function displayMinutes() {
        if (minutes <= 29) {
          let factor = ((minutes - (minutes % 5))/ 5)
          if (minutes % 5 === 0) {
            return `${"☕️".repeat(factor)} ${minutes} to read`
          } else {
            return `${"☕️".repeat(factor + 1)} ${minutes} to read`
          }
        } else {
          let factor = ((minutes - (minutes % 10))/ 10)
          if (minutes % 10 === 0) {
            return `${"🍱".repeat(factor)} ${minutes} to read`
          } else {
            return `${"🍱".repeat(factor + 1)} ${minutes} to read`
          }
        }
      }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date} / {displayMinutes()}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;