---
tags: [" #medroot"]
aliases: []
forms: [combining]
roots: [tachy-]
alphabet:: T
definition: [rapid, fast]
---
>[!Note] Definition of tachy-
>rapid
_____
>[!info]+ Etymology of tachy-
>tachys (Greek)
_____
>[!example]+ Related terms to tachy-
>
>| [[tachy-]] | rapid | fast |  -  |
|:----------:|:-----:|:----:|:---:|
|  [[ox-]]   |  YES  |  -   | acute, pointed, acid, oxygen    |
_____
>[!tip]+ Derivations of tachy-
>```dataview
TABLE definition AS Definition 
>WHERE length(filter(roots, (word) => econtains([[]].roots, word))) > 0 AND file.name != [[]].file.name
SORT file.name ASC
>```
___
>[!faq]- Query
>```dataview
>TABLE definition AS Definition
>FROM #medroot
>WHERE length(filter(definition, (word) => econtains([[]].definition, word))) > 0 AND file.name != [[]].file.name
>```


[[Med roots dictionary]]