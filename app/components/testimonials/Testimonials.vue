<template>
  <section class="mx-auto max-w-7xl py-20 lg:py-40">
    <Heading
      title="What Our Clients Say"
      subTitle="Reviews"
      class="max-w-3xl mx-auto text-center justify-center items-center px-6">
    </Heading>

    <div
      class="justify-center items-center flex gap-10 px-10 py-10 overflow-x-auto scrollbar">
      <ReviewCard
        description="Got a session got a session got a session got a session got a session got a session got a session got a session"
        image="s.png"
        :rating="4" />
      <ReviewCard
        description="Got a session got a session got a session got a session got a session got a session got a session got a session"
        image="s.png"
        :rating="4" />
      <ReviewCard
        description="Got a session got a session got a session got a session got a session got a session got a session got a session"
        image="s.png"
        :rating="4" />
    </div>

    <div class="flex justify-center items-center mt-8 gap-20"></div>
  </section>
</template>
