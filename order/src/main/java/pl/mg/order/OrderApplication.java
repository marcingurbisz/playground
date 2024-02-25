package pl.mg.order;

import lombok.AllArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.support.GenericApplicationContext;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

public class OrderApplication {

    public static void main(String[] args) {
        new SpringApplicationBuilder()
                .initializers((ApplicationContextInitializer<GenericApplicationContext>) ctx -> {
                    ctx.registerBean(OrderController.class);
                    ctx.registerBean(OrderRepository.class); //TODO: Find a way to properly register *Repository without component scanning
                    ctx.registerBean(ItemTypeController.class);
                    ctx.registerBean(ItemTypeRepository.class);
                })
                .web(WebApplicationType.SERVLET)
                .run(args);
    }

    //TODO: Replace rest controllers by functional style endpoint registration
    @RestController
    @RequestMapping("/orders")
    @AllArgsConstructor
    static class OrderController {
        private final OrderRepository orderRepository;
        @PostMapping
        void createOrder(Order order) {
            orderRepository.save(order);
        }
    }

    @RestController
    @RequestMapping("/item-types")
    @AllArgsConstructor
    static class ItemTypeController {
        private final ItemTypeRepository orderRepository;
        @PostMapping
        void createItemType(ItemType itemType) {
            orderRepository.save(itemType);
        }
    }

    record Order(@Id String id, String userId, List<Item> items) {
        record Item(String id, ItemType itemTypeId) {}
    }
    record ItemType(@Id String id, String description, String url) {}
    @Repository interface OrderRepository extends CrudRepository<Order, String> {}
    @Repository interface ItemTypeRepository extends CrudRepository<ItemType, String> {}

}