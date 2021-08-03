const { Blog } = require('../models');

const blogData = [
    {
      blog_title: "Test Title 1",
        username: 'test_B1',
        content: 'dolor hic inventore corrupti odio debitis mollitia, libero soluta sit. Iste dolores numquam natus officiis veniam blanditiis dolorem asperiores? Odio laboriosam explicabo placeat iure consequuntur reprehenderit quibusdam nobis perspiciatis, dolores debitis unde, voluptates, ex totam porro iusto provident ab qui dolorem! In expedita quam excepturi voluptatibus omnis distinctio corporis? Vitae maiores consequuntur eaque ut atque sint iste esse reiciendis quaerat nulla facere itaque, necessitatibus laborum a repellendus officiis nesciunt sed excepturi provident ea assumenda. Saepe perspiciatis voluptate repudiandae blanditiis quis sed possimus hic minus. Eius eligendi sequi tenetur alias reprehenderit perferendis. Eveniet aperiam obcaecati molestias numquam, in suscipit nesciunt, dolorum quaerat quas aspernatur quia! Fugiat a hic ad facilis magnam suscipit, cupiditate id possimus sunt, dolores eius perferendis nesciunt natus tempora. Repellendus, velit deserunt ut earum quaerat quo ex aliquam alias soluta dolor beatae odit neque quas repellat eaque natus. Porro, rem inventore delectus qui eum veritatis et rerum, saepe consequatur, temporibus aperiam labore eveniet sunt natus eaque! Voluptatibus blanditiis assumenda tenetur provident illo officia quam, neque dolore iusto earum accusantium voluptas omnis alias praesentium nihil molestias quibusdam esse, ipsum exercitationem. '
      },
      {
        blog_title: "Test Title 2",
        username: 'test_B2',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus dolore tenetur tempore assumenda provident voluptatum similique laudantium, impedit quaerat non aliquam corporis veniam quisquam saepe! Optio aperiam doloremque, nostrum quas esse, cupiditate neque similique necessitatibus, quia quis ea impedit assumenda nisi fugit minima aliquid? Asperiores reprehenderit impedit, magni deserunt assumenda recusandae modi natus perspiciatis minima, dignissimos similique consequatur quia ducimus! Quas illo minus modi, unde corporis exercitationem atque nesciunt labore. Ipsam consequatur sed, dicta reiciendis magnam, minima perspiciatis hic ratione commodi, itaque possimus. Maiores deleniti corrupti porro minus nisi ex facilis? Cum doloribus autem blanditiis, necessitatibus maxime quibusdam, sit provident, veritatis unde odio deleniti? Doloremque dolorem ut sapiente adipisci neque quam, optio ipsa sed cumque velit perferendis eaque quisquam '
      },
      {
        blog_title: "Test Title 3",
        username: 'test_B3',
        content: 'dolor hic inventore corrupti odio debitis mollitia, libero soluta sit. Iste dolores numquam natus officiis veniam blanditiis dolorem asperiores? Odio laboriosam explicabo placeat iure consequuntur reprehenderit quibusdam nobis perspiciatis, dolores debitis unde, voluptates, ex totam porro iusto provident ab qui dolorem! In expedita quam excepturi voluptatibus omnis distinctio corporis? Vitae maiores consequuntur eaque ut atque sint iste esse reiciendis quaerat nulla facere itaque, necessitatibus laborum a repellendus officiis nesciunt sed excepturi provident ea assumenda. Saepe perspiciatis voluptate repudiandae blanditiis quis sed possimus hic minus. Eius eligendi sequi tenetur alias reprehenderit perferendis. Eveniet aperiam obcaecati molestias numquam, in suscipit nesciunt, dolorum quaerat quas aspernatur quia! Fugiat a hic ad facilis magnam suscipit, cupiditate id possimus sunt, dolores eius perferendis nesciunt natus tempora. Repellendus, velit deserunt ut earum quaerat quo ex aliquam alias soluta dolor beatae odit neque quas repellat eaque natus. Porro, rem inventore delectus qui eum veritatis et rerum, saepe consequatur, temporibus aperiam labore eveniet sunt natus eaque! Voluptatibus blanditiis assumenda tenetur provident illo officia quam, neque dolore iusto earum accusantium voluptas omnis alias praesentium nihil molestias quibusdam esse, ipsum exercitationem.'
      },
      {
        blog_title: "Test Title 4",
        username: 'test_B4',
        content: 'dolor hic inventore corrupti odio debitis mollitia, libero soluta sit. Iste dolores numquam natus officiis veniam blanditiis dolorem asperiores? Odio laboriosam explicabo placeat iure consequuntur reprehenderit quibusdam nobis perspiciatis, dolores debitis unde, voluptates, ex totam porro iusto provident ab qui dolorem! In expedita quam excepturi voluptatibus omnis distinctio corporis? Vitae maiores consequuntur eaque ut atque sint iste esse reiciendis quaerat nulla facere itaque, necessitatibus laborum a repellendus officiis nesciunt sed excepturi provident ea assumenda. Saepe perspiciatis voluptate repudiandae blanditiis quis sed possimus hic minus. Eius eligendi sequi tenetur alias reprehenderit perferendis. Eveniet aperiam obcaecati molestias numquam, in suscipit nesciunt, dolorum quaerat quas aspernatur quia! Fugiat a hic ad facilis magnam suscipit, cupiditate id possimus sunt, dolores eius perferendis nesciunt natus tempora. Repellendus, velit deserunt ut earum quaerat quo ex aliquam alias soluta dolor beatae odit neque quas repellat eaque natus. Porro, rem inventore delectus qui eum veritatis et rerum, saepe consequatur, temporibus aperiam labore eveniet sunt natus eaque! Voluptatibus blanditiis assumenda tenetur provident illo officia quam, neque dolore iusto earum accusantium voluptas omnis alias praesentium nihil molestias quibusdam esse, ipsum exercitationem.'
      },
      

];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
