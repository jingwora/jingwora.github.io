---
tags: [" #medroot"]
aliases: []
roots: [phras-]
forms: [combining]
alphabet:: P
definition: [speak]
---
>[!Note] DEFINITION of phras-
>speak
>*see also: [[lal-]] (talk), [[pha-]] (talk), [[phem-]] (speech)*
_____
>[!info]+ ETYMOLOGY of phras-
>#greek phrazein
_____
>[!example]+ RELATED TERMS to phras-
>
>| [[phras-]] | speak |  -  |
|:----------:|:-----:|:---:|
|  [[pha-]]  |  YES  | communicate, talk    |
_____
>[!tip]+ DERIVATIONS of phras-
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