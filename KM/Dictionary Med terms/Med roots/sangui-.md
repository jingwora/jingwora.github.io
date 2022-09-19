---
tags: [" #medroot"]
aliases: [sanguin-]
roots: [sangui-, sanguin-]
forms: [combining]
alphabet:: S
definition: [blood]
---
>[!Note] DEFINITION of sangui-
>blood
_____
>[!info]+ ETYMOLOGY of sangui-
>#latin sanguis, sanguinis
_____
>[!example]+ RELATED TERMS to sangui-
>
>| [[sangui-]] | blood |
|:-----------:|:-----:|
|  [[-em-]]   |  YES  |
|  [[hem-]]   | YES      |
_____
>[!tip]+ DERIVATIONS of sangui-
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