<template>
  <div class="about">
    <section class="container">
      <div class="about__cart">
        <ul class="about__menu">
          <li>
            <RouterLink to="/" class="about__menu__link">Главная</RouterLink>
          </li>

          <li>
            <RouterLink to="/about" class="about__menu__link">О нас</RouterLink>
          </li>
        </ul>

        <div class="about__img">
          <div class="products__news__list">
            <h2 class="products__news__title">О нас</h2>
          </div>
        </div>

        <div class="about__text">
          <p>
            Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt, explicabo.
            <a href="#!">Nemo enim ipsam voluptatem</a>, quia voluptas sit, aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt,
            neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam
            aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
            eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae
            consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos
            et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum
            deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati
            cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi,
            id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
            distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil
            impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda
            est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non
            recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
            voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
          </p>
          <p>
            Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro
            quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed
            quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat
            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel
            illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et
            iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque
            corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non
            provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum
            et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod
            maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
            Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
            eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum
            rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat. Sed ut perspiciatis, unde
            omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" setup>
.about__img {
  background-image: url(@/assets/img/aboutFon.png);
}
</style>
