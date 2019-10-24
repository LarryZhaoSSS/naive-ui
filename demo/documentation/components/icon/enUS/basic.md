# Basic
```html
<n-icon
  type="ios-contacts"
  size="40"
>
  <ios-contacts/>
</n-icon>
<n-icon
  size="40"
>
  <md-contacts/>
</n-icon>
<n-icon
  size="40"
  color="#000000"
>
  <md-cash />
</n-icon>
```
```js
import mdCash from 'naive-ui/packages/icons/md-cash'
import mdContacts from 'naive-ui/packages/icons/md-contacts'
import iosContacts from 'naive-ui/packages/icons/ios-contacts'

export default {
  components: {
    mdCash,
    mdContacts,
    iosContacts
  }
}
```