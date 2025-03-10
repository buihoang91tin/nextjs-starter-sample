import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

async function main() {
  const posts = [
      {
          rating: 4.2,
          rating_count: 139,
          category: 'YAKITORI',
          desc: 'Lorem Ipsum passage',
          id: '4dc2e1d1-fe89-4a29-b86a-f8bb0ce1395d',
          images: [
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: true
      },
      {
          rating: 4.5,
          rating_count: 200,
          category: 'SUSHI',
          desc: 'Lorem Ipsum passage',
          id: '6ac3e2d1-ge98-5a29-c86a-g9cc1de2396d',
          images: [
              'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1547592180-2f1a1b3c3b68?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s 2',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: false
      },
      {
          rating: 4.7,
          rating_count: 180,
          category: 'RAMEN',
          desc: 'Lorem Ipsum passage',
          id: '7bd4f3e2-hf98-6b39-d87b-h0dd2ee2397e',
          images: [
              'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: true
      },
      {
          rating: 4.3,
          rating_count: 220,
          category: 'TEMPURA',
          desc: 'Lorem Ipsum passage',
          id: '8ce5g4f3-jg09-7c40-e98c-i1ee3ff3408f',
          images: [
              'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1604908177732-40aa343c3f2b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: false
      },
      {
          rating: 4.6,
          rating_count: 190,
          category: 'SOBA',
          desc: 'Lorem Ipsum passage',
          id: '9df6h5g4-kh10-8d41-f09d-j2ff4gg4519g',
          images: [
              'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1570544826585-8dd0cf1d2aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: true
      },
      {
          rating: 4.1,
          rating_count: 160,
          category: 'YAKITORI',
          desc: 'Lorem Ipsum passage',
          id: '0eg7i6h5-lj21-9e52-g10e-k3gg5hh5620h',
          images: [
              'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
              'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          ],
          title: 'The standard Lorem Ipsum passage, used since the 1500s',
          featured: {
              text: 'Lorem Ipsum passage',
              icon: 'stars-02',
          },
          isFavorite: false
      }
  ];

  for (const post of posts) {
      await prisma.post.create({
          data: {
              id: post.id,
              rating: post.rating,
              ratingCount: post.rating_count,
              category: post.category,
              desc: post.desc,
              images: post.images,
              title: post.title,
              featured: {
                create: {
                  text: post.featured.text,
                  icon: post.featured.icon,
                }
              },
              isFavorite: post.isFavorite
          }
      });
  }
  console.log('Seed data inserted successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });