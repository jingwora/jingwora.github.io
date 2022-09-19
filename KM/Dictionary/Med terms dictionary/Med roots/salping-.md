---
tags: [" #medroot"]
aliases: [-salpingx]
roots: [salping-, -salpinx]
forms: [combining]
alphabet:: S
definition: [fallopian tube]
---
>[!Note] DEFINITION of salping-
>fallopian tube
_____
>[!info]+ ETYMOLOGY of salping-
>#greek salpinx, salpingos (war trumpet)
_____
>[!example]+ RELATED TERMS to salping-
>
_____
>[!tip]+ DERIVATIONS of salping-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]