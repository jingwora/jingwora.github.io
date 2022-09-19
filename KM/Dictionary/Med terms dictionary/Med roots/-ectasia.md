---
tags: [" #medroot"]
aliases: [-ectasis]
roots: [-ectasia]
forms: [compound suffix form, noun]
alphabet:: E
definition: [dilation, enlargement]
---
>[!Note] DEFINITION of -ectasia
>forms nouns: [[ecto-|ect-]][[-ia|-asia]] - dilation, enlargement (condition of going outward)
_____
>[!info]+ ETYMOLOGY of -ectasia
>
_____
>[!example]+ RELATED TERMS to -ectasia
>
_____
>[!tip]+ DERIVATIONS of -ectasia
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