import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <ng-container>
      <p>home works! <a [routerLink]="'/about'">about</a></p>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus felis
        neque, sodales a scelerisque et, tincidunt non dui. Phasellus tempor
        nulla vitae augue posuere lobortis. Nullam turpis enim, interdum eu
        risus quis, euismod eleifend nisl. Aenean rutrum sapien dui, a consequat
        urna efficitur vel. Integer fringilla lacus vitae enim tristique, id
        efficitur diam consequat. Sed feugiat vestibulum nunc a ultricies.
        Aliquam nec est vel risus dictum consectetur. Ut commodo sagittis tortor
        non suscipit.
      </p>

      <p>
        Nulla ultrices erat ut orci posuere, at mollis magna congue. Donec
        posuere placerat tortor vel fermentum. Quisque interdum nisi et sagittis
        imperdiet. Morbi eget tincidunt sapien. Mauris at varius ipsum, at
        aliquet ante. Proin accumsan non turpis ac rutrum. Integer vehicula
        fringilla pretium.
      </p>

      <p>
        Donec suscipit sollicitudin augue, sodales laoreet nisl facilisis a.
        Maecenas tincidunt, lorem vitae interdum consectetur, erat elit
        tincidunt ante, ut auctor dolor felis vitae arcu. Curabitur mauris enim,
        rhoncus eget mi eget, eleifend vulputate quam. In consectetur lacinia
        velit et blandit. Suspendisse tempor malesuada consequat. Curabitur a
        turpis gravida, vehicula dui in, pulvinar felis. Ut ante lacus, tempus
        eu pretium sed, molestie vel nisl. In id mauris dolor. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Nunc eget egestas neque, nec aliquam lorem. Donec vel orci laoreet,
        convallis diam at, dapibus felis. Aliquam pretium molestie nibh. Etiam
        nisl ipsum, aliquet id orci id, sollicitudin sollicitudin enim. Nulla
        tempus consectetur enim sagittis consequat.
      </p>

      <p>
        Curabitur nec nisl malesuada, tristique magna id, finibus nisi. Proin
        tortor sem, efficitur nec nisi id, imperdiet finibus ligula. Donec
        fermentum nisi et lorem rhoncus egestas. Sed non nunc nisl. Curabitur
        porttitor libero ut risus efficitur, non luctus ex fermentum. Nunc
        vehicula turpis commodo convallis semper. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Aenean
        nec magna at dolor accumsan volutpat. Fusce et dictum turpis.
      </p>

      <p>
        Nullam eleifend magna magna, ut viverra mi commodo eget. Pellentesque
        accumsan eget nunc nec rutrum. Quisque a vestibulum justo. Morbi enim
        nulla, blandit quis nisl quis, efficitur molestie neque. Vestibulum nec
        maximus odio. Nam eget luctus mauris. Suspendisse molestie, turpis eu
        imperdiet bibendum, risus lacus ultrices sem, ac mollis ligula nibh quis
        lectus. Donec eu finibus nulla, ac ultricies libero. Sed eu lobortis
        felis. Morbi ultricies dignissim nisi, et ultricies sapien venenatis
        scelerisque. Duis felis ligula, fringilla ut vehicula in, cursus ut
        risus. Duis augue felis, eleifend ut viverra id, euismod quis ipsum. Sed
        rhoncus quam ut turpis tristique commodo. Suspendisse auctor vel dui ac
        accumsan. In nisi dui, lobortis et justo nec, aliquet interdum urna.
      </p>

      <p>
        Sed aliquet, nisl dignissim mollis consequat, ipsum orci porttitor
        sapien, cursus malesuada orci metus non lorem. Duis mollis velit metus,
        pellentesque egestas nisl semper sed. Ut orci enim, mollis eget
        scelerisque facilisis, malesuada in odio. Praesent dictum ultricies mi,
        nec euismod odio consectetur et. Nulla blandit, magna vitae mollis
        venenatis, arcu sapien sollicitudin arcu, vitae euismod arcu justo vel
        metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia curae; Aliquam luctus convallis purus sed venenatis. Nam
        rhoncus augue at quam lacinia laoreet. Quisque semper condimentum eros.
        Nam sed gravida justo. Mauris bibendum enim nec mi accumsan lobortis.
        Quisque semper, ipsum eu euismod suscipit, felis ligula accumsan nisl,
        in tincidunt lorem sapien vitae tortor. Vivamus cursus elit vel
        imperdiet consectetur. Quisque facilisis feugiat nunc, et tincidunt
        sapien volutpat sed.
      </p>

      <p>
        Aliquam at porttitor lectus. Praesent tortor massa, accumsan a magna
        mollis, posuere vulputate est. Donec sit amet vulputate purus. Curabitur
        urna enim, facilisis vitae ipsum id, convallis commodo sapien. Aliquam
        faucibus quam non nisi gravida scelerisque. Sed tortor diam, dignissim
        sagittis interdum eget, maximus sit amet elit. Maecenas tristique enim
        at dapibus mattis. Aenean orci metus, consectetur eget leo in, malesuada
        fermentum ipsum. Nam accumsan pellentesque luctus. Nulla pharetra elit
        nibh, in imperdiet leo tincidunt ac. Aliquam quis efficitur turpis. In
        vitae lacus feugiat, bibendum eros et, cursus lacus. Vestibulum nulla
        orci, suscipit id condimentum in, ornare a purus. Ut eu mi at libero
        tempor aliquet. Nulla aliquet odio lacus, sit amet aliquet turpis auctor
        nec. Cras condimentum magna vitae lectus volutpat vestibulum.
      </p>

      <p>
        Nullam laoreet mauris enim, a varius quam accumsan non. Proin vehicula
        eros vitae nisl finibus molestie. Nunc volutpat arcu sed tellus
        consequat, in scelerisque mi dictum. Nam sit amet dictum ligula. Etiam
        semper nisi id risus efficitur fermentum. Pellentesque cursus quam
        suscipit sagittis consectetur. Nulla a enim tellus. Ut sit amet commodo
        dolor. Pellentesque at aliquam enim, quis mattis neque. Nulla eleifend
        faucibus tortor et tempor. Suspendisse pretium dolor eu sem pharetra, at
        lobortis ligula commodo. Sed in neque semper, dignissim justo id,
        dapibus nibh. Donec nec vulputate lorem. Mauris varius, nunc eu rhoncus
        tincidunt, lectus sem eleifend erat, quis interdum purus felis eget leo.
        Suspendisse ut eros quis nunc mollis vestibulum et eu lorem.
      </p>

      <p>
        Morbi eget egestas purus. Sed ultrices ipsum at mauris dapibus iaculis.
        Mauris tristique cursus tristique. Suspendisse porta iaculis leo, eu
        suscipit lacus. Duis viverra ex quis auctor accumsan. Curabitur
        imperdiet arcu a lacinia interdum. Donec condimentum efficitur felis a
        suscipit. Aenean egestas suscipit mi. Sed eleifend mi lacus, sed
        accumsan ligula volutpat ullamcorper. Nam dapibus lorem eget arcu
        egestas accumsan. In hac habitasse platea dictumst. Ut vel sem lacinia,
        mattis dui non, ullamcorper tellus. Aliquam varius purus massa, dapibus
        tempor leo feugiat id. Mauris eu malesuada sem.
      </p>

      <p>
        Ut hendrerit pulvinar dolor. Phasellus et mattis orci, sit amet tempus
        ex. Nunc quis dapibus metus. Phasellus id ante eget ante lobortis
        sodales in a metus. Suspendisse potenti. Etiam nisl nulla, euismod quis
        orci et, finibus scelerisque magna. Praesent eu imperdiet tortor. Donec
        sagittis orci ac nisl sagittis egestas. Suspendisse ut leo vulputate,
        dignissim justo ac, consectetur orci. Aenean lectus tellus, semper in
        condimentum commodo, gravida nec ipsum. Phasellus pharetra mauris eget
        nisi tincidunt, at pulvinar lorem dignissim. Fusce id felis id nunc
        tristique elementum ac sit amet libero. Ut interdum pretium tempus.
        Aliquam volutpat nisl eu dui efficitur luctus. Cras vitae vestibulum mi.
      </p>

      <p>
        Pellentesque condimentum dapibus mi vitae tempor. Mauris molestie mi
        orci, eget convallis sem porttitor quis. Quisque et volutpat velit, sed
        placerat tellus. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Aenean euismod maximus suscipit.
        Donec fermentum hendrerit leo in scelerisque. Ut pellentesque lacus
        augue, sit amet gravida nisl ornare vel.
      </p>

      <p>
        In elementum nibh quis ex pretium, at aliquet erat molestie. Fusce et
        sem id augue dapibus eleifend. Ut pulvinar id lectus malesuada rhoncus.
        Mauris vulputate nunc ut aliquam vestibulum. Mauris egestas elementum
        turpis ullamcorper eleifend. Etiam ac nibh ipsum. Praesent vitae lorem
        tempus elit aliquam maximus. Vivamus et consectetur dui. Maecenas ut
        augue eu augue aliquet pharetra. Nunc eget vehicula sapien. Vestibulum
        scelerisque augue elit, ut pharetra nulla malesuada sit amet. Quisque ex
        est, vulputate sit amet quam nec, aliquam fermentum sem.
      </p>

      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Fusce congue pharetra luctus. Nam fringilla
        posuere risus, a fringilla sapien iaculis vel. Sed placerat elit nec
        ligula dignissim egestas. Proin porttitor justo non justo egestas
        blandit. Sed ut magna rutrum, lacinia justo pretium, volutpat arcu.
        Suspendisse placerat sit amet ligula in semper.
      </p>

      <p>
        Donec nec arcu ipsum. Ut ullamcorper arcu at sapien ullamcorper
        efficitur. Maecenas laoreet tempus hendrerit. Sed nisi nibh, imperdiet
        sit amet mattis quis, cursus at elit. Morbi ipsum justo, malesuada
        commodo justo vel, auctor tincidunt sem. Aenean lacinia tincidunt
        tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Aenean feugiat commodo efficitur.
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur
        nunc ante, varius sed dolor aliquam, blandit ornare felis. Fusce
        tincidunt gravida sapien a iaculis. Curabitur eget ex erat. Vivamus
        elementum sit amet lacus sed dapibus. Sed sit amet justo non turpis
        tempus venenatis. In urna metus, lobortis sed nibh ut, pretium faucibus
        metus. Curabitur vestibulum porta lectus, rutrum congue ipsum vestibulum
        et.
      </p>

      <p>
        Nunc elementum neque eu aliquam vehicula. Sed eleifend, diam vitae
        sagittis maximus, turpis erat pellentesque mauris, a viverra nisi elit
        non diam. Vestibulum congue ligula mattis, blandit mi sed, ultrices
        eros. Nullam tincidunt auctor faucibus. Proin venenatis accumsan est,
        vel efficitur sem venenatis ut. Curabitur a hendrerit turpis. Vivamus
        purus felis, porttitor nec consectetur vel, scelerisque vitae augue.
        Curabitur et congue arcu. Vestibulum mollis elit ex, ac efficitur arcu
        viverra in. Nam ex mi, placerat eu lorem sit amet, dapibus dictum dui.
        Ut consectetur cursus nibh. Nunc sed volutpat ligula, nec pharetra
        nulla.
      </p>

      <p>
        Phasellus condimentum ut tellus sed lobortis. Cras tincidunt odio id
        neque euismod consequat. Proin sagittis justo et velit posuere, egestas
        fringilla tortor semper. Pellentesque ut placerat felis. Duis fringilla
        porttitor tortor, et gravida ligula rhoncus eu. Etiam pulvinar fringilla
        tellus fringilla luctus. Praesent eu cursus risus, quis dapibus neque.
        Etiam hendrerit maximus lacus sed suscipit. Suspendisse sed faucibus
        magna. Phasellus sollicitudin maximus dui. Suspendisse fringilla nulla
        ut tellus viverra tempus sit amet vitae dui. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        dignissim dictum tortor, et placerat lacus faucibus vitae. Nullam
        rhoncus pellentesque arcu ac commodo. Integer ornare justo semper,
        facilisis lacus id, ornare nulla.
      </p>

      <p>
        Etiam aliquet blandit dolor, eu semper neque viverra et. Praesent ut
        interdum nibh, dignissim dapibus ipsum. Interdum et malesuada fames ac
        ante ipsum primis in faucibus. Vivamus pulvinar quis enim at elementum.
        Nulla quis venenatis mi, non imperdiet mauris. Nunc eu lacus quis odio
        sollicitudin auctor. Fusce nec risus ut odio congue vestibulum. Nunc
        ultrices, dui bibendum euismod suscipit, magna nunc dapibus lorem, non
        venenatis ipsum nibh a arcu. Cras tincidunt nisi sit amet nisl accumsan
        sollicitudin. Suspendisse cursus enim vitae dui vulputate scelerisque.
        Maecenas et egestas augue. Nulla facilisi. Proin tempor eget eros sit
        amet placerat. Sed fermentum, dui sit amet tempus auctor, ex dolor
        condimentum lorem, nec porta risus massa at sapien.
      </p>

      <p>
        Aliquam ut malesuada sapien. Curabitur vulputate vestibulum aliquam.
        Curabitur pulvinar lobortis lacus, eget efficitur nisi semper et. Sed
        vestibulum diam ac diam bibendum mattis. In vel libero tincidunt,
        ullamcorper lectus vel, auctor nunc. Nunc porttitor dui quam, non
        tincidunt eros ornare pretium. Nullam quis metus eu sem feugiat tempor.
        Suspendisse ut blandit orci. Vivamus non sapien ac urna viverra eleifend
        vitae sit amet dui. Sed in risus erat. Integer lobortis magna id sodales
        vehicula. Pellentesque tristique sodales sagittis. Aenean ut ante
        ullamcorper odio vehicula consequat.
      </p>

      <p>
        Pellentesque a orci arcu. In eget arcu ullamcorper, porta purus in,
        ultricies sem. Etiam tincidunt magna sed nulla blandit tristique.
        Integer vitae placerat elit. Duis sed tortor id tortor ullamcorper
        ullamcorper. Aenean finibus ullamcorper lacus, sit amet fringilla tellus
        finibus id. Morbi sagittis mi molestie egestas sodales. Donec finibus
        nisi magna, sit amet lobortis nisl semper nec.
      </p>

      <p>
        Nullam faucibus arcu eget arcu fermentum, vel tempor velit tincidunt.
        Etiam vel libero vitae nunc imperdiet posuere. Aliquam suscipit nisl
        tortor, a accumsan enim vulputate nec. Suspendisse ultrices blandit
        metus, id pretium nunc elementum vitae. Cras hendrerit sodales elit, ac
        vehicula lacus egestas eget. Donec in metus sit amet dui vehicula porta
        sagittis non odio. Sed in porta massa. Integer malesuada auctor neque ac
        venenatis. Maecenas sit amet pharetra purus. In id condimentum mauris.
        Quisque finibus hendrerit viverra. Quisque arcu nisl, sollicitudin
        tempor commodo quis, condimentum eget felis.
      </p>

      <p>
        Aenean ac orci ac erat bibendum ultrices. Sed eu placerat felis. Aenean
        vel risus molestie, dapibus lacus sit amet, finibus mi. Nullam id ex
        libero. Curabitur vitae tellus sit amet mi tincidunt efficitur. Donec at
        erat iaculis, tempus mauris at, commodo ante. Duis auctor semper justo
        et aliquam. Nullam blandit cursus sapien quis faucibus. Sed nunc sem,
        porta vitae ultrices bibendum, fermentum vel arcu. Donec volutpat lorem
        et felis porttitor cursus.
      </p>

      <p>
        Vestibulum vel massa dolor. Integer pharetra metus a elit ultrices
        fermentum et in quam. Nunc eros est, elementum ut mi eget, feugiat
        rhoncus orci. Curabitur libero mi, imperdiet nec tellus vel, consectetur
        egestas risus. Vivamus ut sem lectus. Aenean et purus volutpat, molestie
        mi at, commodo mi. Curabitur ultrices sem a lobortis ornare. Donec
        malesuada, urna nec molestie iaculis, ipsum odio porta neque, eu finibus
        velit turpis nec nisl. Etiam sit amet lorem feugiat, blandit velit ac,
        condimentum arcu. Phasellus imperdiet lacinia ex a dictum. Cras non mi
        eleifend metus imperdiet mattis. Morbi venenatis est at sodales auctor.
        In molestie rhoncus nibh a pellentesque. Curabitur feugiat elit erat,
        nec pharetra odio aliquam eu. Ut fermentum purus eget tellus venenatis,
        nec vestibulum augue fermentum.
      </p>

      <p>
        Suspendisse quis ipsum vel nibh elementum blandit. Donec blandit nulla
        vitae ipsum tempor rhoncus. Morbi laoreet vulputate mattis. Vivamus ac
        odio sed elit mattis elementum. Etiam mattis eleifend leo sit amet
        rutrum. Integer pretium laoreet quam id iaculis. Aenean eu luctus
        lectus. Sed elit lectus, bibendum ut eleifend a, posuere ac nulla.
      </p>

      <p>
        Maecenas ultricies sagittis euismod. Integer quis nisi at lectus
        vulputate consectetur. Duis convallis, est nec condimentum eleifend,
        turpis purus convallis neque, nec faucibus elit mi et ex. Morbi
        sollicitudin elit eget aliquam elementum. Sed iaculis posuere porta.
        Aliquam sed leo ut augue commodo tempus. Etiam vestibulum eu nisl eget
        bibendum. Aenean consectetur risus dictum orci rhoncus, fermentum
        posuere lacus elementum. Phasellus nec justo volutpat tellus consequat
        pretium cursus eget sem. Vestibulum dignissim sapien et nisl venenatis,
        in commodo turpis feugiat.
      </p>

      <p>
        Sed pharetra ipsum metus, ut fringilla nunc bibendum nec. Proin maximus
        mollis accumsan. Nulla quis turpis id elit rhoncus tincidunt in ac
        lacus. Aenean sed dui ultricies, consectetur nibh id, sollicitudin arcu.
        Donec ultrices quam at metus ultrices consequat. Nunc ut libero lacinia
        nulla maximus tempus eu non tellus. Integer rhoncus maximus ligula. In
        efficitur faucibus ullamcorper. Nunc vitae dictum mi.
      </p>

      <p>
        Fusce elementum ut ante et maximus. Curabitur euismod semper enim ac
        tempor. Proin non lorem fermentum, porttitor elit non, efficitur magna.
        Maecenas ut metus eu nulla commodo tempor ut a felis. Nullam iaculis
        vehicula venenatis. Nunc varius sed tellus ac lacinia. Aenean malesuada
        cursus felis sit amet feugiat. Suspendisse quam justo, auctor malesuada
        massa malesuada, lobortis venenatis augue. Maecenas convallis ante vitae
        feugiat imperdiet. Fusce vulputate vitae lectus at mollis. Ut quis neque
        nulla. Nunc mattis sit amet velit id viverra.
      </p>

      <p>
        Nulla rutrum eros nec commodo tincidunt. Etiam ut orci hendrerit,
        porttitor tortor quis, pretium magna. Suspendisse a dolor pharetra,
        pellentesque ipsum sit amet, efficitur ante. Sed pellentesque, dolor id
        vehicula tincidunt, erat mauris volutpat eros, eget aliquam ante erat ac
        risus. Proin eu augue blandit, pharetra magna a, fermentum ligula. In
        fermentum metus nunc, et mollis nunc gravida sed. Pellentesque id velit
        ac tortor tincidunt fermentum in in enim. Nullam egestas ipsum in augue
        tristique, at eleifend odio accumsan. Integer consequat lorem id
        pharetra vehicula.
      </p>

      <p>
        Fusce at lectus placerat, pharetra tortor id, aliquam neque. Suspendisse
        ultricies varius est, a feugiat nunc condimentum quis. Cras eget est
        pulvinar, facilisis lacus consectetur, feugiat sem. Nulla facilisi.
        Donec turpis purus, pretium a ultrices non, egestas sed ante. Aliquam
        placerat eros non mi dictum, in varius tortor sodales. Morbi blandit
        dictum massa id volutpat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Morbi non blandit orci, non semper neque. Duis
        porttitor augue eget dolor congue, non varius nisl volutpat. Donec eget
        hendrerit elit, nec egestas mi. Aliquam vel elit tempor, dictum dolor
        rutrum, suscipit odio. In sit amet venenatis dolor.
      </p>

      <p>
        In lacinia, est sed bibendum elementum, nisi odio sodales tortor, ut
        lacinia dolor nulla eu augue. Duis risus arcu, convallis at leo vitae,
        ultricies sagittis tellus. Nunc lobortis libero massa, elementum
        pharetra lorem eleifend ut. Aliquam lacinia velit in ligula vulputate
        eleifend. Phasellus quis congue tortor. Maecenas in mattis leo. Nulla
        hendrerit, tellus at mattis porta, ligula nulla luctus augue, ac
        sagittis orci orci vel lacus. Nunc dolor lectus, iaculis sit amet congue
        semper, euismod a felis. Donec quis felis in enim fringilla tristique et
        ut magna.
      </p>

      <p>
        Donec erat sem, luctus ut nisi in, tempus sagittis ligula. Duis justo
        tortor, volutpat in massa vel, tristique tincidunt nibh. Nullam ex eros,
        hendrerit ut sollicitudin ut, maximus ac tellus. Vestibulum eleifend
        viverra mauris non finibus. Suspendisse a metus turpis. Nullam ex justo,
        gravida vel fermentum ut, porta sed nibh. Cras hendrerit vel ipsum quis
        finibus. Sed feugiat porta tellus ut accumsan. Duis nec nibh et neque
        cursus porttitor. Nam sit amet egestas velit. Vivamus neque nisl,
        hendrerit vitae tincidunt sit amet, euismod ac risus. Suspendisse at
        pharetra augue. Nulla fringilla velit in porta mollis. In sollicitudin
        semper tincidunt.
      </p>

      <p>
        Vivamus odio est, elementum eget sollicitudin sit amet, auctor non
        mauris. Sed eu erat vitae augue convallis interdum. Ut molestie justo
        lacinia tellus facilisis tincidunt. Donec congue sem urna, ac congue
        orci fermentum eget. Vestibulum commodo convallis iaculis. Integer in
        nunc libero. Nulla a ipsum nec augue maximus mollis et euismod felis.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Pellentesque habitant morbi tristique senectus
        et netus et malesuada fames ac turpis egestas. Integer blandit, est et
        efficitur dignissim, magna sem dignissim tortor, et vestibulum urna urna
        tempus lacus. Nunc consequat urna vitae massa rhoncus, at cursus tortor
        accumsan. Suspendisse pretium urna sed sodales venenatis.
      </p>

      <p>
        Duis non ornare nulla. Curabitur consequat tristique pulvinar. Nunc
        auctor placerat nunc eget sollicitudin. Morbi aliquam quam in posuere
        condimentum. Morbi fermentum condimentum elit, id finibus metus ornare
        at. Nam at vulputate enim, a maximus erat. Fusce posuere interdum tortor
        nec mollis. Morbi euismod dolor ac tincidunt viverra. Ut suscipit massa
        ac vulputate commodo. Vestibulum tellus velit, pretium nec nisl vitae,
        hendrerit vulputate arcu. In at enim at nulla aliquam volutpat ut vitae
        nisi. Sed ultricies vehicula diam a euismod. Aliquam eu accumsan lorem,
        eu commodo quam. Duis eleifend interdum massa nec bibendum. Nullam sed
        diam eget metus ultrices viverra id quis dui. Quisque molestie ut dui
        eget ornare.
      </p>

      <p>
        Nullam ac justo vel ante bibendum tempus. In mattis leo eu orci luctus,
        semper interdum elit finibus. Fusce rutrum quam et pulvinar luctus.
        Integer sed magna rutrum, dignissim leo vel, consectetur sapien. Duis at
        augue a erat cursus auctor eget ut lorem. Sed et laoreet dui. Duis a
        molestie quam, sed mollis arcu. Nulla hendrerit consequat accumsan.
        Integer at feugiat libero, non sagittis ipsum.
      </p>

      <p>
        In porta augue quam, quis congue odio egestas sed. Donec est sapien,
        mollis maximus massa non, sodales dignissim libero. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin
        laoreet arcu non est pellentesque consectetur. In rhoncus augue vitae
        ante placerat, ut gravida lorem efficitur. Quisque et ullamcorper elit.
        Nullam tincidunt odio in mauris commodo finibus. Vestibulum cursus purus
        vitae lorem dapibus tristique. Quisque sit amet ipsum mattis, ornare
        tellus quis, ornare nisl. Maecenas eget molestie dolor. Etiam dignissim
        volutpat dolor ut egestas. In maximus ligula eros, sit amet viverra nibh
        consequat vel. Quisque non volutpat nisi, non rutrum urna. Cras congue
        risus ac massa mattis, id luctus libero posuere.
      </p>

      <p>
        Sed nec purus a quam pellentesque condimentum non sit amet purus. Fusce
        vehicula eleifend venenatis. Morbi massa mi, ultrices non eros non,
        condimentum blandit sem. Aliquam a tortor nisi. Morbi tristique lorem
        blandit, placerat metus ut, sollicitudin felis. Curabitur ipsum arcu,
        ornare ac venenatis in, varius id dolor. Sed eu ex felis. Donec semper
        nulla sed sagittis rhoncus. In id leo vitae lorem pellentesque pharetra
        ac lobortis mauris. Etiam dapibus ipsum libero, quis mollis magna
        tristique nec. Vestibulum sit amet porttitor mi.
      </p>

      <p>
        Quisque tincidunt et arcu vel ultricies. Suspendisse aliquam felis sit
        amet tellus sodales ornare. Vestibulum auctor eget quam in blandit.
        Vestibulum non ipsum ut eros semper lacinia. Quisque malesuada non odio
        id laoreet. Nam dictum metus a nibh elementum, sed gravida arcu
        accumsan. Donec rutrum nisi id sapien convallis, fringilla fermentum leo
        ultrices. Sed nunc est, tincidunt iaculis suscipit at, finibus aliquam
        arcu. Nunc convallis sollicitudin odio, nec sollicitudin magna lobortis
        nec. Phasellus vitae lacus ex. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aenean dapibus euismod quam a consectetur.
      </p>

      <p>
        Proin felis nisl, rhoncus nec consectetur et, tempor fermentum ante.
        Vestibulum vitae neque at arcu condimentum gravida. Etiam purus tellus,
        mollis vitae metus eget, faucibus maximus lorem. Morbi vulputate mauris
        eu placerat convallis. Fusce semper ullamcorper nunc. Donec erat orci,
        lobortis eget pellentesque nec, pulvinar a sapien. Proin ante dolor,
        rutrum posuere enim non, sollicitudin sagittis lectus. Vestibulum ante
        ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
        Vestibulum eu ultrices dolor, nec dictum velit. Mauris semper vitae odio
        at pretium.
      </p>

      <p>
        Aenean at magna elit. Proin augue nibh, egestas non vestibulum sit amet,
        blandit vel quam. Fusce ac tempus mi. Donec porta nunc vel ipsum
        ullamcorper mattis. Proin ornare bibendum metus, a faucibus odio finibus
        eu. Cras varius orci sit amet scelerisque tincidunt. Mauris tempor massa
        et sollicitudin malesuada. Nullam posuere viverra tristique. Sed
        malesuada quam sit amet sem sodales congue. Suspendisse vitae arcu eu
        magna facilisis malesuada sed ut libero. Pellentesque suscipit ornare
        egestas. Cras sit amet posuere ipsum. Duis ac risus eget purus faucibus
        accumsan vitae sed felis.
      </p>

      <p>
        Nam sodales condimentum purus id elementum. Proin sit amet nisi eget
        quam efficitur pellentesque. Suspendisse ut semper urna, ac sollicitudin
        leo. Ut ullamcorper vehicula ipsum, vel euismod risus efficitur vel.
        Maecenas id fringilla massa, sed pretium dui. Phasellus in dolor eros.
        In ultricies sed diam quis tincidunt. Quisque ornare tellus id aliquam
        aliquet. Etiam vitae pharetra massa, id posuere felis. Sed ultrices vel
        felis sit amet condimentum.
      </p>

      <p>
        Nunc malesuada augue mauris, id placerat purus lacinia id. Sed suscipit
        interdum mi, et ullamcorper tortor bibendum non. Etiam bibendum nunc vel
        augue pellentesque varius. Cras venenatis, ante at blandit dignissim,
        velit odio blandit dui, convallis venenatis leo est vel nulla. Praesent
        dictum metus dolor, a auctor enim dapibus non. Cras convallis euismod
        dictum. Suspendisse sit amet porttitor odio. Aenean aliquam nibh leo,
        nec hendrerit augue varius vel. Nunc ac dolor ligula. Duis quis lobortis
        lacus, et ornare metus. Duis rhoncus dui eget urna rhoncus aliquet.
        Pellentesque non dignissim felis, a rhoncus lectus. Proin sed imperdiet
        mi. In elementum, nulla at placerat condimentum, odio dolor finibus
        lorem, eget tempor libero magna sed purus.
      </p>

      <p>
        Maecenas aliquet pretium nulla, eget ultricies erat dapibus a.
        Suspendisse venenatis libero sollicitudin, porttitor velit ac, feugiat
        elit. Curabitur fermentum mauris quam, eget tempor odio imperdiet quis.
        Curabitur ultrices sed orci ut interdum. Pellentesque auctor vulputate
        ligula, ac imperdiet nunc faucibus quis. Cras at placerat lorem, eu
        suscipit neque. Fusce auctor eros et dictum aliquet. Mauris faucibus
        enim elit, nec cursus massa ultricies vel. Nulla vitae erat mi. Cras
        facilisis eros id tortor congue, at sagittis lectus rhoncus. Donec ac
        risus sed nunc tempor tempor nec id mauris. Donec mauris odio, efficitur
        nec neque ut, imperdiet fringilla ante. Nam hendrerit vulputate urna,
        sed ultricies ligula condimentum eu. Etiam imperdiet, urna sed finibus
        lacinia, nisi ipsum efficitur nulla, non mollis leo quam quis nunc.
        Aliquam iaculis odio at elit malesuada fermentum.
      </p>

      <p>
        Sed sagittis nunc ut fermentum viverra. Etiam accumsan porta leo, ut
        vestibulum quam interdum a. Nullam molestie malesuada vestibulum. Nulla
        facilisi. Donec mollis dolor vitae eleifend imperdiet. Nullam enim
        libero, hendrerit vel auctor convallis, consectetur sit amet lacus.
        Pellentesque tristique sollicitudin condimentum. Aenean a augue elit.
        Donec massa lectus, euismod sit amet metus et, ornare imperdiet lectus.
        Nunc luctus varius mauris vitae hendrerit. Fusce ac justo non ante
        auctor aliquet. Duis felis lorem, pretium nec aliquam sit amet, aliquam
        eu magna. Praesent scelerisque quam tellus, sit amet aliquet erat
        ullamcorper eget.
      </p>

      <p>
        Phasellus auctor varius rhoncus. Fusce tempor commodo malesuada.
        Curabitur tempor sem eget est ultrices dapibus. Proin in odio orci.
        Curabitur semper malesuada massa at porttitor. Nulla et justo sagittis
        augue vehicula blandit. Integer vitae pellentesque urna. Mauris purus
        orci, interdum quis porttitor vitae, consectetur at lorem. Nam at diam
        neque. Maecenas ultricies orci lorem, sit amet elementum lacus facilisis
        lacinia. Nulla sit amet dictum orci. Nulla venenatis ac arcu pulvinar
        malesuada. Nullam quis justo tortor. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Morbi
        nunc lacus, posuere quis iaculis ut, pretium tempus velit.
      </p>

      <p>
        Phasellus sit amet quam ligula. Curabitur sed justo urna. Nam euismod
        orci non libero dapibus, ut luctus leo gravida. Integer ac diam egestas,
        dignissim tortor id, varius orci. Curabitur vitae nulla interdum,
        blandit metus eu, rhoncus nunc. Aenean accumsan nisl at sapien semper,
        quis tempus elit sagittis. Quisque a scelerisque enim, non consectetur
        nisl. Proin a pretium nibh. Phasellus vel auctor mi. Fusce sit amet
        fermentum purus. Pellentesque interdum, enim non lacinia luctus, risus
        ipsum facilisis lacus, quis faucibus est ligula ut elit. Vestibulum
        placerat lobortis ex eget efficitur.
      </p>

      <p>
        Mauris luctus lacus et tortor scelerisque malesuada at in nulla. Proin
        at nisl quis turpis vehicula pellentesque. Donec elementum non turpis
        vel egestas. Etiam fermentum laoreet laoreet. Integer tincidunt
        malesuada eros, id porttitor tellus. Integer malesuada in mi vel
        eleifend. In in tempus justo. Mauris non risus vitae dolor blandit
        fermentum. Suspendisse sit amet accumsan neque. Proin eleifend elementum
        massa, vel pretium ligula accumsan id. Pellentesque at dignissim lectus.
        In malesuada faucibus ornare.
      </p>

      <p>
        Nulla enim nisl, feugiat vitae viverra iaculis, cursus sed est. Aliquam
        a lacus sed magna porta faucibus non in urna. Maecenas hendrerit varius
        purus ut luctus. Donec sed augue diam. Integer bibendum turpis ligula, a
        aliquet lectus tincidunt in. Donec rutrum nisl eget eros viverra, ut
        tempus ipsum ullamcorper. Nunc non erat eu massa consequat fringilla
        suscipit id lacus.
      </p>

      <p>
        Suspendisse faucibus massa vel diam fringilla, vel ornare est accumsan.
        Maecenas auctor libero a volutpat scelerisque. Ut ut consectetur elit.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Donec consectetur consectetur orci. Donec sed erat nisi.
        Vestibulum id diam imperdiet, rutrum ante eget, consectetur libero.
        Aenean ac sodales mi, eget malesuada tellus. Phasellus sagittis, nibh
        eget egestas placerat, nulla lorem laoreet urna, at eleifend justo
        sapien vitae leo. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Nulla id turpis in ligula tincidunt dapibus ut at eros.
        Curabitur metus justo, sollicitudin et dignissim at, laoreet tempor
        metus.
      </p>

      <p>
        Fusce pretium aliquam ex. Aliquam id mauris volutpat, elementum ante a,
        mattis arcu. Vestibulum faucibus tincidunt sollicitudin. Quisque vitae
        sapien diam. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Sed in ex at libero mollis laoreet ut
        at urna. Aliquam viverra eros leo, nec consequat diam pellentesque et.
        Vivamus nec volutpat arcu.
      </p>

      <p>
        Nullam a erat vel erat volutpat consectetur ac vehicula magna. Ut
        hendrerit arcu augue, ut ornare odio tincidunt efficitur. Cras lacinia
        lectus urna, pulvinar vehicula nibh finibus sed. Morbi sagittis
        scelerisque ante. Quisque eu mauris eu risus commodo dignissim. Aenean
        ut felis sit amet ligula tristique hendrerit maximus eu libero. Integer
        auctor turpis rutrum consectetur maximus. Suspendisse ut ex nec magna
        semper dictum. Curabitur non arcu fringilla, aliquet lectus et,
        venenatis ante. Pellentesque finibus, metus non eleifend blandit, augue
        mi facilisis mauris, eu ultrices turpis augue sit amet nibh. Proin dolor
        ante, pharetra sed sem at, vehicula elementum eros. Morbi convallis
        malesuada nisl. Vestibulum ultricies erat vel odio laoreet porta. In
        accumsan purus id mi semper, sit amet blandit elit iaculis. Nam augue
        risus, hendrerit sit amet justo ac, dignissim blandit eros.
      </p>

      <p>
        Fusce et lectus nec urna interdum semper sed eget ipsum. Sed blandit ac
        tortor lobortis dignissim. Aliquam ullamcorper diam magna, a congue
        turpis convallis ac. Morbi vehicula, nunc eleifend rutrum scelerisque,
        urna elit congue nulla, nec gravida nisi turpis ut nibh. Pellentesque
        pretium nisi vel turpis viverra, a tempus quam mollis. Pellentesque
        ipsum massa, lacinia id mauris sed, consectetur imperdiet erat. Duis
        vitae est enim. Pellentesque iaculis eget tortor in vulputate. Donec
        aliquam sollicitudin imperdiet. Proin sed commodo ante. Morbi porta sit
        amet turpis et interdum. Integer quam tortor, facilisis vitae
        consectetur a, ornare in arcu. Sed vel placerat libero, non vulputate
        nulla. Duis dapibus dolor ut leo eleifend, nec dictum nunc tristique.
        Nunc tristique pharetra leo congue aliquet.
      </p>
    </ng-container>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent {}
