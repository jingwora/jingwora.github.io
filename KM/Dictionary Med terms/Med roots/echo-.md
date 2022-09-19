---
tags: [" #medroot"]
aliases: []
roots: [echo-]
forms: [combining]
alphabet:: E
definition: [reverberating sound, echo]
---
>[!Note] DEFINITION of echo-
>reverberating sound, echo
_____
>[!info]+ ETYMOLOGY of echo-
>#greek ekho
_____
>[!example]+ RELATED TERMS to echo-
>
_____
>[!tip]+ DERIVATIONS of echo-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]