---
tags: [" #medroot"]
aliases: [acou(s)-, acu-, acus-]
roots: [acou-, acou(s)-, acu-, acus-]
forms: [combining]
alphabet:: A
definition: [hear]
---
>[!Note] DEFINITION of acou-
>hear
_____
>[!info]+ ETYMOLOGY of acou-
>#greek akouin
_____
>[!example]+ RELATED TERMS to acou-
>
_____
>[!tip]+ DERIVATIONS of acou-
>```dataview
>TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
>SORT file.name ASC
>```
_____
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```

[[Med roots dictionary]]